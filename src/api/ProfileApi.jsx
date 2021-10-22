import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX = BASE_URL + "profile/";

const getProfileByClientId = async (clientId) => {
    return await axios.get(URL_PREFIX + "byClientId?clientId=" + clientId);
}

export { getProfileByClientId }