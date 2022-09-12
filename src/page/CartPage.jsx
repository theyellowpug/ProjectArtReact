import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { getClientIdByEmail } from '../api/ClientApi';
import { getProductsOfCartByClientId } from "../api/CartApi";


export const CartPage = (props) => {

    const state = useSelector((state) => state);
    const history = useHistory();

    const [products,setProducts] = useState([])

    const forwardToCheckoutPage = (event) =>{
        event.preventDefault();
        history.push("/checkout")
    }

    useEffect(()=>{
        state.accessToken!=="" ?
            getClientIdByEmail(jwt_decode(state.accessToken).sub)
            .then(respone=>getProductsOfCartByClientId(respone.data)
            .then(respone2=>setProducts(respone2.data)))
            :
            setProducts([])
                
    },[state])

    return (
            products.length === 0 ? (
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
                    {products.map(product=><ul key={product.id}>{"productId: "+product.id+"product name:"+product.name}</ul>)}
                </div>
            ))
}
