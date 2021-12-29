import React, {useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { getClientIdByEmail } from '../api/ClientApi';


export default function ForCreators() {

    const state = useSelector((state) => state);
    const [clientId,setClientId] = useState("");

    const decodeJWtToken = () => {
        state.accessToken!=="" ? 
            getClientIdByEmail(jwt_decode(state.accessToken).sub).then(respone=>setClientId(respone.data)) : setClientId("")
    }

    useEffect(()=>{
        decodeJWtToken()
    },[state])

    return(
        clientId!=="" ? 
            <p>Logged in as: {clientId}</p> //redirect to profile/id page
        :
            <p>Not logged in</p>
    )
}
