import axios from "axios";
import { store } from "../state/Store";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="cart/" 

const getProductsOfCartByClientId = async (clientId) => {
    let config = {
        headers: { Authorization: `Bearer ${store.getState().accessToken}` }
    }
return await axios.get(BASE_URL + URL_PREFIX + "productsByClientId?clientId="+clientId, config);
}

const addProductsToCartByClientId = async (clientId,productId) => {
    let config = {
        headers: { Authorization: `Bearer ${store.getState().accessToken}` }
    }
return await axios.put(BASE_URL + URL_PREFIX + "addProductToCartByClientId?clientId="+clientId+"&productId="+productId, config);
}

export 
{ 
    getProductsOfCartByClientId,
    addProductsToCartByClientId
}


