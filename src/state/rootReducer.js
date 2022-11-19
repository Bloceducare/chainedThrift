import { combineReducers } from "redux";
import { commonReducers } from "../common";
import { pursesReducer } from "../pages/purses/state";
import {authReducer,userExistReducer} from "../common/AuthModal/state/reducers"

const rootReducer = combineReducers({
    ...commonReducers,
    purses: pursesReducer,
    auth:authReducer,
    status:userExistReducer
});

export default rootReducer;
