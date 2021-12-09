import React, {useState,useEffect} from "react";
//import "../Payment.css";
import { getAllProducts } from "../api/ProductApi";
import LoadingIcon from "../component/multipleUse/LoadingIcon";
import { ProductCard } from "../component/product/ProductCard";


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
        <main>
            <div className="App">
                {allProducts.map(product=><ProductCard key={product.id} product={product}/>)}
            </div>
        </main>
        :
        <LoadingIcon/>            
      );
}
