import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { JwtTokenActionCreators } from "../../state/actions/JwtTokenActions";


const RefreshAccessToken = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { setJwtToken, removeJwtToken , refreshJwtToken} = bindActionCreators( JwtTokenActionCreators, dispatch);

    refreshJwtToken()
    setTimeout(() => {
        console.log('Hello, World!')
      }, 3000);

    return(<div></div>)
}

export{
    RefreshAccessToken
}