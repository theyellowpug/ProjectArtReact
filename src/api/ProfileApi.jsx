import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const getProfileByClientId = async (clientId) => {
    return await axios.get(BASE_URL + "profile/byClientId?clientId=" + clientId);
}

export { getProfileByClientId }