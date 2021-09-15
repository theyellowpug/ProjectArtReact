import React from "react";

export const ProductCard = (props) => {
    return(
        <div>
            <h1>img placeholder</h1>
            <h2>{props.product.name}</h2>
            <p>{props.product.price} Ft</p>
            <p>{props.product.description}</p>
        </div>
    )
}