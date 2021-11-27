import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX="product/";

// GET

const getAllProducts = async () => {
    return await axios.get(BASE_URL + URL_PREFIX + "all");
}

const getProductsByProductType = async (productType, numberOfPages, numberOfProducts) => {
    return await axios.get(BASE_URL + URL_PREFIX + "byProductType?productType="+productType+"&numberOfPages="+numberOfPages+"&numberOfProducts="+numberOfProducts);
}

const getProductById = async (id) => {
    return await axios.get(BASE_URL + URL_PREFIX + "?id=" + id);
}

// POST

const postProduct = async (clientId, productData) => {
    let config = {
        headers: { productData }
    }
    return await axios.post(BASE_URL + URL_PREFIX + "?clientId=" + clientId, null, config);
}

export{
    getAllProducts,
    getProductById,
    getProductsByProductType,
    postProduct
}