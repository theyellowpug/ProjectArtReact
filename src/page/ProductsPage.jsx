import React, {useState,useEffect} from "react";
import { getProductsByProductType } from "../api/ProductApi";
import ProductCard from '../component/product/ProductCard';
import LoadingIcon from "../component/multipleUse/LoadingIcon";
import '../css/pageContent.css';    //use "main" element as page container
import SearchBar from "../component/product/ProductSearchBar";
import { CardFlexContainer } from '../css/CardStyledComponents';


export default function ProductsPage() {

    const [allProducts,setAllProducts]=useState();
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        getProductsByProductType("ITEM", 0, 10)
            .then(response=>{
                setAllProducts(response.data)
            }).then(response2=>setIsLoaded(true))
    },[])

    return (
        isLoaded ?
        <main>
            <SearchBar/>
            <CardFlexContainer>
                {allProducts.map(product=><ProductCard key={product.id} product={product}/>)}
            </CardFlexContainer>
        </main>
        :
        <LoadingIcon/>
    )
}