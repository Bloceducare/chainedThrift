import { combineReducers } from "redux";
import { commonReducers } from "../common";
import { pursesReducer } from "../pages/purses/state";

const rootReducer = combineReducers({
    ...commonReducers,
    purses: pursesReducer,
});

export default rootReducer;
