import erc20abi from "./abis/erc20.json";
import purseAbi from "./abis/purse.json";
import purseFactoryAbi from "./abis/purseFactory.json";
import { Contract } from "ethers";

export const getTokenContract = (address, signerOrProvider) => {
    return new Contract(address, erc20abi, signerOrProvider);
};

export const getPurseFactoryContract = (address, signerOrProvider) => {
    return new Contract(address, purseFactoryAbi, signerOrProvider);
};

export const getPurseContract = (address, signerOrProvider) => {
    return new Contract(address, purseAbi, signerOrProvider);
};
