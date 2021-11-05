import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import JwtTokenReducer from "./JwtTokenReducer";

const reducers = combineReducers({
    cart:CartReducer,
    jwtToken:JwtTokenReducer
})

export default reducers;

