import { OPEN, CLOSE, SAVE_AUTH, SAVE_STATUS } from ".";

export const OPEN_AUTH_MODAL = () => {
    return {
        type: OPEN,
    };
};

export const CLOSE_AUTH_MODAL = () => {
    return {
        type: CLOSE,
    };
};

export const OPEN_SIGNIN_AUTH_MODAL = () => {
    return {
        type: OPEN,
    };
};

export const CLOSE_SIGNIN_AUTH_MODAL = () => {
    return {
        type: CLOSE,
    };
};

export const SAVE_AUTH_DETAILS_TO_STORE = (payload) => {
    return {
        type: SAVE_AUTH,
        payload,
    };
};

export const SAVE_USER_STATUS = (payload) => {
    return {
        type: SAVE_STATUS,
        payload,
    };
};
