import {CONNECT, DISCONNECT} from './types';

const INITIAL_STATE = {
    address: null,
    connectedWallet: null,
    ethBalance: null,
    tokenBalance: null
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {

    switch (type) {
        case CONNECT:
            return { ...state, ...payload };
        case DISCONNECT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default reducer;