import { OPEN, CLOSE } from ".";

export const connectWalletModalReducer = (state = {open: false}, {type}) => {
    switch (type) {
        case OPEN:
            return {...state, open: true};
        case CLOSE:
            return {...state, open: false};
        default:
            return state;
    }
}