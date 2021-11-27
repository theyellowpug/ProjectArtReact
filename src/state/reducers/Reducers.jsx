import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import AccessTokenReducer from "./AccessTokenReducer";

const reducers = combineReducers({
    cart:CartReducer,
    accessToken:AccessTokenReducer
})

export default reducers;

