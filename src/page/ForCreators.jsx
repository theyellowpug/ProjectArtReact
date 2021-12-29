import React, {useState,useEffect} from 'react';
import { useSelector } from "react-redux";


export default function ForCreators() {

    const state = useSelector((state) => state);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        setIsLoggedIn(state.accessToken!=="")
    },[state])

    return(
        isLoggedIn ? 
            <p>Logged in</p> //redirect to profile/id page
        :
            <p>Not logged in</p>
    )
}
