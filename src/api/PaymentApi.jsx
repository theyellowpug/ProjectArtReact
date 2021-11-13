import axios from "axios";
import { store } from "../state/Store";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="payment/" 

const createPaymentIntent = async () => {
    let config = {
        headers: { Authorization: `Bearer ${store.getState().jwtToken}` }
    }
    return await axios.post(BASE_URL + URL_PREFIX + "create-payment-intent", null, config);
}

export{
    createPaymentIntent
}
