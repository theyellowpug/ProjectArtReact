import axios from "axios";
import { store } from "../state/Store";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="payment/" 

const createPaymentIntent = async (products) => {
    let config = {
        headers: { Authorization: `Bearer ${store.getState().accessToken}` }
    }
    return await axios.post(BASE_URL + URL_PREFIX + "create-payment-intent", products, config);
}

export{
    createPaymentIntent
}
