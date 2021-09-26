import React, {useState,useEffect} from "react";
import "../App.css";
import { getProductById } from "../api/ProductApi";
import { useHistory } from "react-router";

export const ProductDetailsPage= (props) => {
    
    const productId=props.match.params.productId;

    const history = useHistory();

    const [productData,setProductData]=useState();
    const [isLoaded,setIsLoaded]=useState(false);

    const addToCart = (event) =>{
        console.log("Add to cart Redux")
    }

    useEffect(()=>{
        getProductById(productId)
            .then(response=>{
                console.log(response.data)
                setProductData(response.data)
            }).then(response2=>setIsLoaded(true))
    },[])

    return (
        isLoaded ? 
        <div className="App">
            <h1>{productData.name}</h1>
            <p>{productData.price}</p>
            <button onClick={addToCart}>Add to cart</button>
        </div>
        :
        <p>Loading</p>              
      );
}
