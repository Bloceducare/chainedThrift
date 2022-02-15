import { Web3Provider } from "@ethersproject/providers";

export const getLibrary = (provider) => {
    return new Web3Provider(provider);
}