import React, {useState,useEffect} from "react";
import { getProductsByProductType } from "../api/ProductApi";
import styled from 'styled-components';
import ProductCard from '../component/product/ProductCard';
import LoadingIcon from '../component/multipleUse/LoadingIcon';
import '../css/pageContent.css';    //use "main" element as page container
import SearchBar from "../component/product/ProductSearchBar";
import { Card_FlexContainer } from '../css/CardStyledComponents';


export default function Services() {

    const [allServices,setAllServices]=useState();
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        getProductsByProductType("SERVICE", 0, 10)
            .then(response=>{
                console.log(response.data)
                setAllServices(response.data)
            }).then(response2=>setIsLoaded(true))
    },[])

    return (
        isLoaded ?
        <main>
            <SearchBar/>
            <Card_FlexContainer>
                {allServices.map(product=><ProductCard key={product.id} product={product}/>)}
            </Card_FlexContainer>
        </main>
        :
        <LoadingIcon/>
    )
}