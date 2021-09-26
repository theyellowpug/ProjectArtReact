import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import CartReducer from "./CartReducer";
import reducers from "./Reducers";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)