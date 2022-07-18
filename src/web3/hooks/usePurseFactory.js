import { useWeb3React } from "@web3-react/core";
import { ethers, utils } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { addresses } from "../constants";
import { getPurseFactoryContract } from "../contractFactory";
import { getRpcUrl, getChainID } from "../helpers";
import { useDispatch } from "react-redux";
import { SAVE_PURSES_TO_STORE } from "../../pages/purses/state";
import usePurse from "./usePurse";
import { formatDate } from "../../utils";

const usePurseFactory = () => {
    const { active, library, chainId } = useWeb3React();
    let signer = useRef();
    let provider = useRef();
    let purseFactory = useRef();
    const dispatch = useDispatch();
    const { getPurseData, getPurseMembers} = usePurse();

    useEffect(() => {
        if (active) {
            signer.current = library.getSigner();
        } else {
            provider.current = new ethers.providers.JsonRpcProvider(
                getRpcUrl()
            );
        }
        purseFactory.current = getPurseFactoryContract(
            active
                ? addresses[chainId].purseFactoryAddress
                : addresses[getChainID()].purseFactoryAddress,
            signer.current || provider.current
        );

        const exec = async () => {
            const allPurses = await purseFactory.current.allPurse();

            const chatId = await Promise.all(
            allPurses.map(addr => {
                return purseFactory.current.purseToChatId(addr)
              })
             );

            const pursesDetails = await Promise.all(
             allPurses.map((purseAddress) => {
              return getPurseData(purseAddress);
              })
            );

            const purseMembers = await Promise.all(
             allPurses.map((purseAddress) => {
             return getPurseMembers(purseAddress);
             })
            );

            const allpursesData = allPurses.map((address, index) => {
                return {
                    address: address,
                    purseState: pursesDetails[index].purseState,
                    time_interval: pursesDetails[index].time_interval,
                    timeCreated: formatDate(pursesDetails[index].timeCreated),
                    total_deposit_balance:
                        pursesDetails[index].contract_total_deposit_balance,
                    total_collateral_balance: utils.formatUnits(
                        pursesDetails[index].contract_total_collateral_balance
                    ),
                    deposite_amount: utils.formatUnits(
                        pursesDetails[index].deposit_amount
                    ),
                    max_member: pursesDetails[index].max_member_num,
                    required_collateral:
                        pursesDetails[index].required_collateral,
                    purseId: pursesDetails[index].purseId,
                    increment_in_membership:
                        pursesDetails[index].increment_in_membership,
                    num_of_members_who_has_recieved_funds:
                        pursesDetails[index]
                            .num_of_members_who_has_recieved_funds,
                    token_address: pursesDetails[index]._address_of_token,
                    members: purseMembers[index],
                    chatId: Number(chatId[index])
                };
            });

            dispatch(SAVE_PURSES_TO_STORE(allpursesData));
        };

        exec();
        // eslint-disable-next-line
    }, [active, chainId]);

    const createPurse = useCallback(
        async (
            contribution_amount,
            // collateral,
            max_member,
            time_interval,
            chatId,
            tokenAddress,
            pos,
            callback
        ) => {
            if (!active) throw new Error("you are not connected");
            if (!purseFactory.current) return;
            try {
                purseFactory.current
                    .createPurse(
                        contribution_amount,
                        // collateral,
                        max_member,
                        time_interval,
                        chatId,
                        tokenAddress,
                        pos
                    )
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [active]
    );
    return { createPurse };
};

export default usePurseFactory;
