import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { getPurseContract } from "../contractFactory";
import { getRpcUrl } from "../helpers";

const usePurse = () => {
    const { active, library, account } = useWeb3React();
    let signer = useRef();
    let provider = useRef();
    let purseContract = useRef();

    useEffect(() => {
        if (active) {
            signer.current = library.getSigner();
        } else {
            provider.current = new ethers.providers.JsonRpcProvider(
                getRpcUrl()
            );
        }
    }, [active]);
    const init = (purseAddress) => {
        purseContract.current = getPurseContract(
            purseAddress,
            signer.current || provider.current
        );

    };

    const getPurseData = useCallback(
        async (purseAddress) => {
            init(purseAddress);
            try {
                const purseDetails =
                    await purseContract.current.purse();
                return purseDetails;
            } catch (err) {
                console.error(err);
            }
        },
        [init, purseContract]
    );

    const getPurseMembers = useCallback(
        async (purseAddress) => {
            init(purseAddress);
            try {
                const purseMemebers =
                    await purseContract.current.purseMembers();
                return purseMemebers;
            } catch (err) {
                console.error(err);
            }
        },
        [init, purseContract]
    );

    // const joinPurses = useCallback(
    //     async (purseAddress,collateral) => {
    //         init(purseAddress);
    //         try {
    //             const purses =
    //                 await purseContract.current.joinPurse(collateral);
    //             return purses;
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     },
    //     [init, purseContract]
    // );
    const joinPurses = useCallback(
        async (
            collateral,
            callback,
        ) => {
            if (!active) throw new Error("you are not connected");
            if (!purseContract.current) return;
            try {
                purseContract.current
                    .joinPurse(
                        collateral
                    )
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [account]
    );


    return { getPurseData, getPurseMembers,joinPurses };
};

export default usePurse;
