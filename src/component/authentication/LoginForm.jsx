import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { login } from "../../api/AuthenticationApi";
import { JwtTokenActionCreators } from "../../state/actions/JwtTokenActions";

export const LoginForm = (props) => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { setJwtToken, removeJwtToken , refreshJwtToken} = bindActionCreators( JwtTokenActionCreators, dispatch);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = (event) => {
      event.preventDefault();
      let userCredentials={
        "username": username,
        "password": password
      }
      login(userCredentials).then(response=>{
        setJwtToken(response.data.access_token)
        localStorage.setItem("refresh_token", response.data.refresh_token)
      })
  }

  return(
    <div>
      <form>
          <label>Username:</label>
          <input onChange={event=>setUsername(event.target.value)}></input>
          <label>Password:</label>
          <input onChange={event=>setPassword(event.target.value)} type="password"></input>
          <button onClick={submitLoginForm}>Login</button>
      </form>
    </div>)
}