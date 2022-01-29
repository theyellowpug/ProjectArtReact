import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllTransactionsByCustomerId } from "../api/TranasctionApi";

export const TransactionHistoryPage= () => {

    const state = useSelector((state) => state);

    const [transactions,setTransactions] = useState()

    useEffect(()=>{
        getAllTransactionsByCustomerId(state.userId)
            .then(response=>setTransactions(response.data)) 
    },[state])

    return(
    <div>
        <h1>Tranasction History:</h1>
        <table>
            <tr id="tableHeader">
                <th>Transaction Id</th>
                <th>CustomerId</th>
                <th>ProductId</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
            {transactions ? transactions.map(t=>
            <tr id={t.id}>
                <td>{t.id}</td>
                <td>{t.customerId}</td>
                <td>{t.productId}</td>
                <td>{t.amount}</td>
                <td>{t.date}</td>
            </tr>) : <tr id="emptyRow"></tr>}
        </table>
    </div>
    )
}