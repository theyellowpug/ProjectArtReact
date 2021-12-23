import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX = BASE_URL + "productTag/";

const getAllTags = async () => {
    return await axios.get(URL_PREFIX + "all");
}

const getByNameStartsWith = async (name) => {
    return await axios.get(URL_PREFIX + "byNameStartsWith?name=" + name)
}

export {
    getAllTags,
    getByNameStartsWith
}