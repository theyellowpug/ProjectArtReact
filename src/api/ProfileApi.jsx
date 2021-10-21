import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX="profile/";

const getProfileByClientId = async (clientId) => {
    return await axios.get(BASE_URL + URL_PREFIX + "byClientId?clientId=" + clientId);
}

export { getProfileByClientId }