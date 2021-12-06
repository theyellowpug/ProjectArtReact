import axios from "axios";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="client/"

const postClient = (registrationData) => {
    axios.post(BASE_URL + URL_PREFIX, registrationData)
}
/*
const getAllClient = () => {
    return axios.get(BASE_URL + URL_PREFIX + "/all");
}
*/
export{
    postClient,
    //getAllClient
}