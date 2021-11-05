import React, { useState } from "react";
import { login } from "../../api/AuthenticationApi";

export const LoginForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = (event) => {
      event.preventDefault();
      let userCredentials={
        "username": username,
        "password": password
      }
      login(userCredentials).then(response=>{console.log(response.data)})
      
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