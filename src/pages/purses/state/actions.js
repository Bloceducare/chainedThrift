import { SAVE } from ".";

export const savePurses = (payload) => {
    return {
        type: SAVE,
        payload
    }
}