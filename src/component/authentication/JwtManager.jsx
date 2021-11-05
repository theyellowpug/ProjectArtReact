import React, { useState, useEffect } from "react";

let token = "";

const setJwtToken = (props) => {
    token=props
    console.log("set is called")
  }

const getJwtToken = () => {
    console.log(token)
}

export{
    setJwtToken,
    getJwtToken
}
