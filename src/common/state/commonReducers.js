import { connectWalletModalReducer } from "../connectWalletModal";
import { accountDetailsReducer } from "../accountDetailsModal";
import { authModalReducer} from "../AuthModal";
export const commonReducers = {
    connectWalletModal: connectWalletModalReducer,
    accountDetailsModal: accountDetailsReducer,
    authModal:authModalReducer,
};
