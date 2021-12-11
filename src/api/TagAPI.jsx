import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX = BASE_URL + "productTag/";

const getAllTags = async () => {
    return await axios.get(BASE_URL + "all");
}

const getByNameStartsWith = async (name) => {
    return await axios.get(BASE_URL + "byNameStartsWith?name=" + name)
}

export {
    getAllTags,
    getByNameStartsWith
}