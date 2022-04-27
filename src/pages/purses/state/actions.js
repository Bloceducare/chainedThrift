import { SAVE } from ".";

export const SAVE_PURSES_TO_STORE = (payload) => {
    return {
        type: SAVE,
        payload,
    };
};
