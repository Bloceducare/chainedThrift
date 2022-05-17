import { SAVE } from ".";

const initialState = [];

export const pursesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SAVE:
            return [...payload];
        default:
            return state;
    }
};
