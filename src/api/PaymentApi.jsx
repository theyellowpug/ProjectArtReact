import axios from "axios";
import { store } from "../state/Store";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="payment/" 

const createPaymentIntent = async (clientId) => {
    let config = {
        headers: { Authorization: `Bearer ${store.getState().accessToken}` }
    }
    return await axios.post(BASE_URL + URL_PREFIX + "create-payment-intent?clientId="+clientId, "", config);
}

const savePayment = async (paymentData) => {
    let config = {
        headers: { Authorization: `Bearer ${store.getState().accessToken}` }
    }
    return await axios.post(BASE_URL + URL_PREFIX + "savePayment", paymentData, config);
}

export{
    createPaymentIntent,
    savePayment
}
