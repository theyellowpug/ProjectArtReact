import React, {useState,useEffect} from "react";
import { getProductsByProductType } from "../api/ProductApi";
import styled from 'styled-components';
import ProductCard from '../component/product/ProductCard';
import LoadingIcon from "../component/multipleUse/LoadingIcon";
import '../css/pageContent.css';    //use "main" element as page container
import SearchBar from "../component/product/ProductSearchBar";
import { Card_FlexContainer } from '../css/CardStyledComponents';


export default function Products() {

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
            <Card_FlexContainer>
                {allProducts.map(product=><ProductCard key={product.id} product={product}/>)}
            </Card_FlexContainer>
        </main>
        :
        <LoadingIcon/>
    )
}

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 70px;
`;