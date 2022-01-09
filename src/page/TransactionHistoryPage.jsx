import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllTransactionsByCustomerId } from "../api/TranasctionApi";

export const TransactionHistoryPage= () => {

    const state = useSelector((state) => state);

    useEffect(()=>{
        getAllTransactionsByCustomerId(state.userId)
            .then(response=>console.log(response.data)) 
    },[state])

    return(
    <div>
        <h1>Tranasction History:</h1>
    </div>
    )
}