import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback } from "react";
import { getTokenContract } from "../contractFactory";
import { getRpcUrl } from "../helpers";

const useToken = ({ tokenAddress }) => {
    const { active, address, library } = useWeb3React();
    const [symbol, setSymbol] = useState();
    const [name, setName] = useState();
    const [balance, setBalance] = useState()
    let signer, provider, tokenContract;

    
    useEffect(() => {
        if (active) {
            provider = library;
            signer = library.getSigner();
        } else {
            provider = ethers.providers.JsonRpcProvider(getRpcUrl());
        }
        tokenContract = getTokenContract(tokenAddress, signer || provider);
    }, [active, tokenAddress]);


    useEffect(() => {
        if(active) {
            balance = await tokenContract.balanceOf(address)
            setBalance(balance);
        }

        Promise.all([
            tokenContract.name(),
            tokenContract.symbol()
        ]).then(result => {
            setName(result[0]);
            setSymbol(result[1]);
        })
        
    }, [tokenAddress, active, address])
    

    const getAllowance = useCallback(
        async (spender) => {
            if (!active) throw new Error("you are not connected");
            try {
                return await tokenContract.allowance(address, spender);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [address, tokenContract]
    );

    const approve = useCallback(
        async (spender, amount) => {
            if (!active) throw new Error("you are not connected");
            try {
                return await tokenContract.approve(spender, amount);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        [address, tokenContract]
    );

    return {balance, name, symbol, getAllowance, approve};
};

export default useToken;
