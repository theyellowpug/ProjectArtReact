import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { CartActionCreators } from "../../state/CartActions";

export const ProductCard = (props) => {

    const history=useHistory();

    const dispatch = useDispatch();    
    const { addToCart,removeFromCart } = bindActionCreators( CartActionCreators, dispatch);

    const forwardToDetailsPage = (event) =>{
        event.preventDefault();
        history.push("/productDetails/"+props.product.id)
    }

    return(
        <div>
            <h1>img placeholder</h1>
            <h2>{props.product.name}</h2>
            <p>{props.product.price} Ft</p>
            <p>{props.product.description}</p>
            <button onClick={forwardToDetailsPage}>Details</button>
            <button onClick={() => addToCart(props.product.id)}>Add to cart</button>
        </div>
    )
}