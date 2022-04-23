import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { getPurseFactoryContract } from "../contractFactory";
import { getRpcUrl } from "../helpers";

const usePurseFactory = () => {
    const { active, account, library } = useWeb3React();
    const [purses, setSetPurses] = useState();
    let signer = useRef();
    let provider = useRef();
    let purseFactory = useRef();

    useEffect(() => {
        if (active) {
            signer.current = library.getSigner();
        } else {
            provider.current = new ethers.providers.JsonRpcProvider(
                getRpcUrl()
            );
        }
        purseFactory.current = getPurseFactoryContract(
            tokenAddress,
            signer.current || provider.current
        );
    }, [active]);

    useEffect(() => {
        purseFactory
            .allPurse()
            .then((purses) => setSetPurses(purses))
            .catch((err) => console.err(err));
    }, []);

    const createPurse = useCallback(
        async (
            contribution_amount,
            collateral,
            max_member,
            time_interval,
            chatId,
            tokenAddress
        ) => {
            if (!active) throw new Error("you are not connected");
            try {
                return await purseFactory.current.createPurse(
                    contribution_amount,
                    collateral,
                    max_member,
                    time_interval,
                    chatId,
                    tokenAddress
                );
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [account]
    );

    return { purses, createPurse };
};

export default usePurseFactory;
