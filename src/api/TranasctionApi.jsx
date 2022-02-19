import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX = BASE_URL + "transaction/";

const getAllTransactionsByCustomerId = async (customerId) => {
    return await axios.get(URL_PREFIX + "byCustomerId?customerId="+customerId);
}

const getAllTransactionsByArtistId = async (artistId) => {
    return await axios.get(URL_PREFIX + "byArtistId?artistId="+artistId);
}

const createTransaction = async (transactionData) => {
    return await axios.post(URL_PREFIX + "/", transactionData);
}

export {
    getAllTransactionsByArtistId,
    getAllTransactionsByCustomerId,
    createTransaction
}