import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import  {CartActionCreators} from "../state/CartActions";


export const CartPage = (props) => {

    const state = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    
    const { depositMoney, withdrawMoney } = bindActionCreators( CartActionCreators,dispatch);

    console.log(state)

    const history = useHistory();

    const forwardToCheckoutPage = (event) =>{
        event.preventDefault();
        history.push("/checkout")
    }

    return (
        <div className="App">
            <p>Cart Placeholder</p>
            <button onClick={forwardToCheckoutPage}>Checkout</button>
            <h1>{state}</h1>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
        </div>

      );
}

