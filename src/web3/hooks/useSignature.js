// import { AbstractConnector } from "@web3-react/abstract-connector";
// import { ethers } from "ethers";
import { hexlify, toUtf8Bytes } from "ethers/lib/utils";
import {useToasts} from "react-toast-notifications";
import {useWeb3React} from "@web3-react/core" 




export const useSignature = () => {

    const {library, account} = useWeb3React()
    const {addToast} = useToasts()
    // const { library, account } = params;
    const sign = async (message) => {
        try {
            /**
             * Wallet Connect does not sign the message correctly unless you use their method
             * @see https://github.com/WalletConnect/walletconnect-monorepo/issues/462
             */
            // @ts-ignore
            if (library.provider?.wc) {
                const wcMessage = hexlify(toUtf8Bytes(message));
                // @ts-ignore
                const signature =
                    await library.provider?.wc.signPersonalMessage([
                        wcMessage,
                        account,
                    ]);
                return signature;
            }

            return library.getSigner(account).signMessage(message);
        } catch (error) {
            console.error(error)
            addToast(error, {appearance:"error"})
            throw error;
        }
    };

    return { sign };
};