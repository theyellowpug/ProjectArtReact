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

const createPaymentIntentWithCustomerId = async (products, customerId) => {
    let config = {
        headers: { Authorization: `Bearer ${store.getState().accessToken}` }
    }
    return await axios.post(BASE_URL + URL_PREFIX + "create-payment-intent-with-customerId?customerId="+customerId, products, config);
}

export{
    createPaymentIntent,
    createPaymentIntentWithCustomerId
}
