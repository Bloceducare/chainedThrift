import { OPEN, CLOSE, SAVE_AUTH} from ".";

export const authModalReducer = (state = { open: true }, { type }) => {
    switch (type) {
        case OPEN:
            return { ...state, open: true };
    
    case CLOSE:
        return {...state, open:false}
        
    default:
        return state
    }
};

const initial ={}
export const authReducer = (state = initial, {type, payload}) =>{
    switch (type) {
        case SAVE_AUTH:
            return {...payload};
        default:
            return state;
    }
}

