import React, {useState,useEffect} from "react";
import "../App.css";
import { getProductById } from "../api/ProductApi";

export const ProductDetailsPage= (props) => {
    
    const productId=props.match.params.productId;

    const [productData,setProductData]=useState();
    const [isLoaded,setIsLoaded]=useState(false);

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
        </div>
        :
        <p>Loading</p>              
      );
}
