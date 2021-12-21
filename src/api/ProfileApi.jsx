import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX = BASE_URL + "profile/";

const getProfileByClientId = async (clientId) => {
    return await axios.get(URL_PREFIX + "byClientId?clientId=" + clientId);
}

const getAllProfiles = async () => {
    return await axios.get(URL_PREFIX + "all");
}

const getProfileCards = async (numberOfPages,numberOfCards) => {
    return await axios.get(URL_PREFIX + "profileCard?numberOfPages="+numberOfPages+"&numberOfProfiles="+numberOfCards);
}

export 
{ 
    getProfileByClientId,
    getAllProfiles,
    getProfileCards
}