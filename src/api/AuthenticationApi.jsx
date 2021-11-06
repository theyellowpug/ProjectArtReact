import axios from "axios";
import {BASE_URL} from "./ApiConstants"


const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("refresh_token")}` }
};

const login = async (userCredentials) => {
    return await axios.post(BASE_URL + "login", null, { params: userCredentials });
}

const refreshToken = async () => {
    return await axios.get(BASE_URL + "client/refreshToken", config);
}

export{
    login,
    refreshToken
}