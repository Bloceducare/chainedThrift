import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { getPurseContract } from "../contractFactory";
import { getRpcUrl } from "../helpers";

const usePurse = (purseAddress) => {
    const { active, account, library } = useWeb3React();
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
        purseContract.current = getPurseContract(
            purseAddress,
            signer || provider
        );
    }, [active]);
};

export default usePurse;
