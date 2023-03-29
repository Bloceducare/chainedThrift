import { useWeb3React } from "@web3-react/core";
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const siginInMessage = "SignIn to use chainedThrift!";

export const useSignInMessage = () => {
    const { account } = useWeb3React();
    const message = ` Welcome to ChainedThrift! \n \n Kindly Sign-in with your wallet address to utilize the Dapp. \n \n This request will not trigger a blockchain transaction or cost any gas fees. \n \n Wallet Address: ${account}.`;
    return { message };
};

export const useSignUpMessage = () => {
    const { account } = useWeb3React();
    const signupmessage = ` Welcome to ChainedThrift! \n  \n You're Creating an Account on chainedThrift \n Kindly sign the message  to utilize the Dapp. \n \n This request will not trigger a blockchain transaction or cost any gas fees. \n \n Wallet Address: ${account}.`;
    return { signupmessage };
};
export const siginUpMessage = "Create Account to use ChainedThrift!";
export const addresses = {
    11155111: {
        purseFactoryAddress: "0xD0B8F0140462a85175FF4ECb95674B91F658878d",
        // purseFactoryAddress: "0xBab751A09CfAF14b5f20f9F3169726E9794d0C74",
        // CTTAddress: "0x0752A2c48e3Df4Ec9901CCF5d2E63acBD15eF7d7",
        // CTTAddress:"0xC43C4408dA7bEc20C7f4956aCf525B4c6002b279"
        CTTAddress: "0x28770cE709BE803778DD3F4057e890323687fF34",
    },
};
