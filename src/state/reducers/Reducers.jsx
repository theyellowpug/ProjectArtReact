import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import AccessTokenReducer from "./AccessTokenReducer";
import UserIdReducer from "./UserIdReducer";

const reducers = combineReducers({
    cart:CartReducer,
    accessToken:AccessTokenReducer,
    userId: UserIdReducer
})

export default reducers;

