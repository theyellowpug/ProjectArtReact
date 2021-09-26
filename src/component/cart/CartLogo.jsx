import React from "react";
import { useHistory } from "react-router";

export const CartLogo = (props) => {

    const history=useHistory();

    const forwardToCartPage = (event) =>{
        event.preventDefault();
        history.push("/cart")
    }

    return (
        <div className="App">
          <button onClick={forwardToCartPage}>Cart</button>
        </div>
      );
}