import React, {useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";


export default function ForCreators() {

    const state = useSelector((state) => state);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [clientEmail,setClientEmail] = useState();

    useEffect(()=>{
        setIsLoggedIn(state.accessToken!=="")
        let decode = jwt_decode(state.accessToken)
        setClientEmail(decode.sub)
    },[state])

    return(
        isLoggedIn ? 
            <p>Logged in as: {clientEmail}</p> //redirect to profile/id page
        :
            <p>Not logged in</p>
    )
}
