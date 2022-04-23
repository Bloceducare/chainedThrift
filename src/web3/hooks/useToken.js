import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { ADDRESS_ZERO } from "../constants";
import { getTokenContract } from "../contractFactory";
import { getRpcUrl } from "../helpers";

const useToken = (tokenAddress) => {
    const { active, account, library } = useWeb3React();
    const [symbol, setSymbol] = useState();
    const [name, setName] = useState();
    const [decimals, setDecimals] = useState();
    const [balance, setBalance] = useState();
    let signer = useRef();
    let provider = useRef();
    let tokenContract = useRef();

    useEffect(() => {
        if (!tokenAddress) return;
        if (active) {
            signer.current = library.getSigner();
        } else {
            provider.current = new ethers.providers.JsonRpcProvider(
                getRpcUrl()
            );
        }

        tokenContract.current = getTokenContract(
            tokenAddress,
            signer.current || provider.current
        );
    }, [active, tokenAddress, library]);

    useEffect(() => {
        if (!tokenAddress || !tokenContract.current) return;
        if (active) {
            Promise.all([
                tokenContract.current.balanceOf(account),
                tokenContract.current.decimals(),
            ])
                .then((results) => {
                    setBalance(formatUnits(results[0], results[1]));
                    setDecimals(results[1]);
                })
                .catch((err) => console.error(err));
        } else {
            setBalance(null);
            setDecimals(null);
        }

        Promise.all([
            tokenContract.current.name(),
            tokenContract.current.symbol(),
        ])
            .then((results) => {
                setName(results[0]);
                setSymbol(results[1]);
            })
            .catch((err) => console.error(err));
    }, [tokenAddress, active, account, tokenContract]);

    const getAllowance = useCallback(
        async (spender) => {
            if (!tokenAddress || !tokenContract.current) return;
            if (!active) throw new Error("you are not connected");
            try {
                return await tokenContract.current.allowance(account, spender);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [active, account, tokenContract]
    );

    const approve = useCallback(
        (spender, amount) => {
            if (!tokenAddress || !tokenContract.current) return;
            if (!active) throw new Error("you are not connected");
            try {
                return tokenContract.current.approve(spender, amount);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [active, tokenContract]
    );

    return { balance, name, symbol, decimals, getAllowance, approve };
};

export default useToken;
