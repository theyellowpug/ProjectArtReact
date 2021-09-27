import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import  {CartActionCreators} from "../state/CartActions";


export const CartPage = (props) => {

    const state = useSelector((state) => state);
    const history = useHistory();

    const dispatch = useDispatch();    
    const { addToCart,removeFromCart } = bindActionCreators( CartActionCreators, dispatch);

    const forwardToCheckoutPage = (event) =>{
        event.preventDefault();
        history.push("/checkout")
    }

    return (
        state.cart.length === 0 ? (
            <div>
                <h1>Cart is empty</h1>
            </div>
        ) 
        : 
        (
            <div className="App">
                <p>Cart Placeholder</p>
                <button onClick={forwardToCheckoutPage}>Checkout</button>
                <p>Cart elements:</p>
                {state.cart.map(productId=><ul key={productId}>{productId}</ul>)}
                <button onClick={() => addToCart(1)}>Add to cart</button>
            </div>
        ));
}

