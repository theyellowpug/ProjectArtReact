import React, {useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { getClientIdByEmail } from '../api/ClientApi';
import { useHistory } from 'react-router-dom';


export default function ForCreators() {

    const history = useHistory()

    const state = useSelector((state) => state);

    useEffect(() => {
        state.accessToken!=="" ? 
            getClientIdByEmail(jwt_decode(state.accessToken).sub).then(respone=>history.push("/profile/"+respone.data)) : history.push("/login")
    },[state])

    return(<></>)

}
