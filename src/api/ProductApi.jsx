import axios from "axios";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="product/"

const getAllProducts = async () => {
    return await axios.get(BASE_URL + URL_PREFIX + "all");
}

const getProductById = async (id) => {
    return await axios.get(BASE_URL + URL_PREFIX + id);
}

export{
    getAllProducts,
    getProductById
}