import axios from "axios";
import { BASE_URL } from './ApiConstants';

const URL_PREFIX = BASE_URL + 'comment/';

const getAllByClientId = async (id) => {
    return await axios.get(URL_PREFIX + "allByClientId?clientId=" + id);
}

const getAllByProductId = async (id) => {
    return await axios.get(URL_PREFIX + "allByProductId?productId=" + id);
}

const getAllByArticleId = async (id) => {
    return "ARTICLE COMMENNT: NOT IMPLEMENTED";
}

export{
    getAllByClientId,
    getAllByProductId,
    getAllByArticleId
}