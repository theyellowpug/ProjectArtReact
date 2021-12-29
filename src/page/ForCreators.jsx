import React, {useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";


export default function ForCreators() {

    const state = useSelector((state) => state);
    const [clientEmail,setClientEmail] = useState("");

    const decodeJWtToken = () => {
        state.accessToken!=="" ? 
            setClientEmail(jwt_decode(state.accessToken).sub) : setClientEmail("")      
    }

    useEffect(()=>{
        decodeJWtToken()
    },[state])

    return(
        clientEmail!=="" ? 
            <p>Logged in as: {clientEmail}</p> //redirect to profile/id page
        :
            <p>Not logged in</p>
    )
}
