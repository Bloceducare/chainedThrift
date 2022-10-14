import { combineReducers } from "redux";
import { commonReducers } from "../common";
import { pursesReducer } from "../pages/purses/state";
import {authReducer} from "../common/AuthModal/state/reducers"

const rootReducer = combineReducers({
    ...commonReducers,
    purses: pursesReducer,
    auth:authReducer
});

export default rootReducer;
