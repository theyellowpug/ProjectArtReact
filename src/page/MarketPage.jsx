import React, {useState,useEffect} from "react";
//import "../Payment.css";
import { getAllProducts } from "../api/ProductApi";
import ProductCard from "../component/product/ProductCard";


export const MarketPage = () => {
    
    const [allProducts,setAllProducts]=useState();
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
            {allProducts.map(product=><ProductCard key={product.id} product={product}/>)}
        </div>
        :
        <p>Loading</p>              
      );
}
