import { OPEN, CLOSE } from ".";

export const OPEN_WALLET_MODAL = () => {
    return {
        type: OPEN,
    };
};

export const CLOSE_WALLET_MODAL = () => {
    return {
        type: CLOSE,
    };
};
