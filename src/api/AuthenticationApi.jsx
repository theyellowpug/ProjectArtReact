import axios from "axios";
import {BASE_URL, REFRESH_CONFIG} from "./ApiConstants"


const login = async (userCredentials) => {
    return await axios.post(BASE_URL + "login", null, { params: userCredentials });
}

const refreshToken = async () => {
    return await axios.get(BASE_URL + "client/refreshToken", REFRESH_CONFIG);
}

export{
    login,
    refreshToken
}