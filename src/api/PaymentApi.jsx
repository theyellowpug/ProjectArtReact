import axios from "axios";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="payment/" 

const createPaymentIntent = async () => {
    return await axios.post(BASE_URL + URL_PREFIX + "create-payment-intent");
}

export{
    createPaymentIntent
}
