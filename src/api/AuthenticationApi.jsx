import axios from "axios";
import {BASE_URL} from "./ApiConstants"

const login = async (userCredentials) => {
    return await axios.post(BASE_URL + "login", null,{ params: userCredentials});
}

export{
    login,
}