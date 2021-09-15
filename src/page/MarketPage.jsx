import React, {useState,useEffect} from "react";
import "../App.css";
import { getAllProducts } from "../api/ProductApi";
import { getAllByLabelText } from "@testing-library/dom";
import { ProductCard } from "../component/product/ProductCard";


export const MarketPage = () => {
    
    const [allProducts,setAllProducts]=useState("a");
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        getAllProducts()
            .then(response=>{
                console.log(response.data)
                setAllProducts(response.data)
            }).then(response2=>setIsLoaded(true))

    },[])

    return (
        isLoaded ? 
        <div className="App">
            {allProducts.map(product=><ProductCard product={product}/>)}
        </div>
        :
        <p>Loading</p>              
      );
}
