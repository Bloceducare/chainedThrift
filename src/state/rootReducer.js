import { combineReducers } from "redux";
import { commonReducers } from "../common";

const rootReducer = combineReducers({
    ...commonReducers
});

export default rootReducer;