import React from "react";
import { useHistory } from "react-router";

export const ProductCard = (props) => {

    const history=useHistory();

    const forwardToDetailsPage = (event) =>{
        event.preventDefault();
        history.push("/productDetails/"+props.product.id)
    }

    const addToCart = (event) =>{
        console.log("Add to cart Redux")
    }

    return(
        <div>
            <h1>img placeholder</h1>
            <h2>{props.product.name}</h2>
            <p>{props.product.price} Ft</p>
            <p>{props.product.description}</p>
            <button onClick={forwardToDetailsPage}>Details</button>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}