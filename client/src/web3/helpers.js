import { Web3Provider } from "@ethersproject/providers";

export const getLibrary = (provider) => {
    return Web3Provider(provider);
}