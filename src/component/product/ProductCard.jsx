import React from "react";
import { useHistory } from "react-router";

export const ProductCard = (props) => {

    const history=useHistory();

    return(
        <div onClick={event => history.push("/productDetails/"+props.product.id)}>
            <h1>img placeholder</h1>
            <h2>{props.product.name}</h2>
            <p>{props.product.price} Ft</p>
            <p>{props.product.description}</p>
        </div>
    )
}