import { Web3Provider } from "@ethersproject/providers";
import { UnsupportedChainIdError } from "@web3-react/core";
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { addresses } from "./constants";
import { RPC_URL } from "./rpc_urls";
import sample from "lodash/sample";

export const getLibrary = (provider) => {
    return new Web3Provider(provider);
};

export const getConnectionError = (err) => {
    if (err instanceof NoEthereumProviderError)
        return "Your browser is not Ethereum enabled, you can install MetaMask on desktop, or visit from a dApp browser on mobile wallet, or try connecting with wallet connect";
    else if (err instanceof UnsupportedChainIdError)
        return "You're connected to an unsupported network.";
    else if (
        err instanceof UserRejectedRequestErrorInjected ||
        err instanceof UserRejectedRequestErrorWalletConnect
    )
        return "Please authorize your wallet connection to this DApp";
    else console.error("wallet connection error", err);
    return "An unknown error occured";
};

export const getUserTokenBalance = async (
    userAddress,
    tokenAddress,
    library
) => {
    try {
    } catch (err) {}
};

export const getUserBalances = async (address, library) => {
    try {
        const balance = await library.getBalance(address);
        console.log("user balance: ", balance);
    } catch (err) {
        console.err(err);
    }
};

// export const tokensConfig = {
//     80001: [
//         {
//             symbol: "CTT",
//             address: addresses[80001].CTTAddress,
//             logoSrc: "/assets/Vector.svg",
//         },
//     ],
// };
// default setup
// export const getRpcUrl = () => {
//     const env = process.env.REACT_APP_ENV;
//     switch (env) {
//         case "testnet":
//             return RPC_URL[80001];
//         default:
//             return RPC_URL[137];
//     }
// };

// default setup
// export const getChainID = () => {
//     const env = process.env.REACT_APP_ENV;
//     switch (env) {
//         case "testnet":
//             return 80001;
//         default:
//             return 137;
//     }
// };
export const tokensConfig = {
    5: [
        {
            symbol: "CTT",
            address: addresses[5].CTTAddress,
            logoSrc: "/assets/Vector.svg",
        },
    ],
};

export const getRpcUrl = () => {
    const env = process.env.REACT_APP_ENV;
    switch (env) {
        case "testnet":
            return RPC_URL[5];
        default:
            return RPC_URL[137];
    }
};

export const getChainID = () => {
    const env = process.env.REACT_APP_ENV;
    switch (env) {
        case "testnet":
            return 5;
        default:
            return 137;
    }
};

if (
    process.env.REACT_APP_ENV !== "testnet" &&
    (!process.env.REACT_APP_NODE1 ||
        !process.env.REACT_APP_NODE2 ||
        !process.env.REACT_APP_NODE3)
) {
    throw Error("one base URL is undefined");
}

export const nodes = [
    process.env.REACT_APP_NODE1,
    process.env.REACT_APP_NODE2,
    process.env.REACT_APP_NODE3,
];

export const getNodeUrl = () => {
    const env = process.env.REACT_APP_ENV;
    switch (env) {
        case "testnet":
            return sample(nodes);
        default:
            return RPC_URL[137];
    }
};
