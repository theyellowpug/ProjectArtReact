import axios from "axios";
import {BASE_URL} from "./ApiConstants"

const URL_PREFIX="client/"

const postClient = (registrationData) => {
    axios.post(BASE_URL + URL_PREFIX, registrationData)
}

const getClientIdByEmail = (email) => {
    return axios.get(BASE_URL + URL_PREFIX + "clientIdByEmail?email=" + email);
}

const getIsArtist = (id) => {
    return axios.get(BASE_URL + URL_PREFIX + "isArtist?id=" + id);
}

export{
    postClient,
    getClientIdByEmail,
    getIsArtist 
}