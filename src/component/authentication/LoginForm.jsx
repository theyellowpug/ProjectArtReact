import React, { useState } from "react";

export const LoginForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = (event) => {
      event.preventDefault();
      console.log("username:"+username+" password:"+password)
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