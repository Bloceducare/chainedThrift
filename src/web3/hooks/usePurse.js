import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { getPurseContract } from "../contractFactory";
import { getRpcUrl } from "../helpers";

const usePurse = () => {
    const { active, library } = useWeb3React();
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
                    await purseContract.current.purse_details();
                return purseDetails;
            } catch (err) {
                console.error(err);
            }
        },
        [init, purseContract]
    );

    return { getPurseData };
};

export default usePurse;
