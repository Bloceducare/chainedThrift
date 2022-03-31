import { SAVE } from ".";

const initialState = {
    allPurses: [

    ],
    myPurses: [

    ]
}

export const connectWalletModalReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SAVE:
            return {...state, ...payload};
        case CLOSE:
        default:
            return state;
    }
}