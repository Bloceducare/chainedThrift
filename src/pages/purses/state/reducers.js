import { SAVE } from ".";

const initialState = [];

export const pursesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SAVE:
            return { ...state, purses:[ ...payload] };
        default:
            return state;
    }
};
