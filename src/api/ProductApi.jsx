import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX="product/";

const getAllProducts = async () => {
    return await axios.get(BASE_URL + URL_PREFIX + "all");
}

const getProductsByProductType = async (productType, numberOfPages, numberOfProducts) => {
    return await axios.get(BASE_URL + URL_PREFIX + "byProductType?productType="+productType+"&numberOfPages="+numberOfPages+"&numberOfProducts="+numberOfProducts);
}

const getProductById = async (id) => {
    return await axios.get(BASE_URL + URL_PREFIX + "?id=" + id);
}

export{
    getAllProducts,
    getProductById,
    getProductsByProductType
}