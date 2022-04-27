import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { addresses } from "../constants";
import { getPurseFactoryContract } from "../contractFactory";
import { getRpcUrl, getChainID } from "../helpers";
import { useDispatch } from "react-redux";
import { SAVE_PURSES_TO_STORE } from "../../pages/purses/state";
import usePurse from "./usePurse";

const usePurseFactory = () => {
    const { active, account, library, chainId } = useWeb3React();
    let signer = useRef();
    let provider = useRef();
    let purseFactory = useRef();
    const dispatch = useDispatch();
    const { getPurseData } = usePurse();

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

        purseFactory.current
            .allPurse()
            .then((purses) => {
                Promise.all(
                    purses.map((purseAddress) => {
                        return getPurseData(purseAddress);
                    })
                ).then((results) => {
                    const purseArr = [];
                    results.forEach((result, index) => {
                        purseArr.push({
                            address: purses[index],
                            members: result.members,
                            purseState: result.purseState,
                            voteToClose: result.voteToClose.toString(),
                            voteToReOpen: result.voteToReOpen.toString(),
                            voteToTerminate: result.voteToTerminate.toString(),
                            time_interval: result.time_interval.toString(),
                            timeCreated: result.timeCreated.toString(),
                        });
                    });

                    dispatch(SAVE_PURSES_TO_STORE(purseArr));
                });
            })
            .catch((err) => console.error(err));
    }, [active]);

    const createPurse = useCallback(
        async (
            contribution_amount,
            collateral,
            max_member,
            time_interval,
            chatId,
            tokenAddress,
            callback
        ) => {
            if (!active) throw new Error("you are not connected");
            if (!purseFactory.current) return;
            try {
                purseFactory.current
                    .createPurse(
                        contribution_amount,
                        collateral,
                        max_member,
                        time_interval,
                        chatId,
                        tokenAddress
                    )
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [account]
    );

    return { createPurse };
};

export default usePurseFactory;
