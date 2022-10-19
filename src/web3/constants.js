import { useWeb3React } from "@web3-react/core";
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const  siginInMessage = "SignIn to use chainedThrift!"

export const useSignInMessage = () =>{
    const {account} = useWeb3React()
    const message = ` Welcome to chainedThrift! \n \n Kindly signin with your wallet address to utilize the Dapp. \n \n This request will not trigger a blockchain transaction or cost any gas fees. \n \n Wallet Address: ${account}.`
    return {message}
}

export const useSignUpMessage = () =>{
    const {account} = useWeb3React()
    const signupmessage = ` Welcome to chainedThrift! \n  \n You're Creating an Account on chainedThrift \n Kindly sign the message  to utilize the Dapp. \n \n This request will not trigger a blockchain transaction or cost any gas fees. \n \n Wallet Address: ${account}.`
    return {signupmessage}
}
export const  siginUpMessage = "Create Account to use chainedThrift!"
export const addresses = {
    5: {
        purseFactoryAddress: "0x901775722DE97D43cEFA859B02096e2495C1c1CD",
        // purseFactoryAddress: "0xBab751A09CfAF14b5f20f9F3169726E9794d0C74",
        // CTTAddress: "0x0752A2c48e3Df4Ec9901CCF5d2E63acBD15eF7d7",
        // CTTAddress:"0xC43C4408dA7bEc20C7f4956aCf525B4c6002b279"
        CTTAddress:"0x8b66476808AC9B8e1eFE2843DE61db634D9c609B"
    },
};
