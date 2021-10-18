import React, {useState,useEffect} from "react";
import { getAllProducts } from "../api/ProductApi";
import styled from 'styled-components';

import ProductCard from '../component/product/ProductCard';

import '../css/pageContent.css';    //use "main" element as page container

export default function Products() {

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
            <FlexContainer>
                <ProductCard product={TermekTeszt}/>
                {allProducts.map(product=><ProductCard key={product.id} product={product}/>)}
            </FlexContainer>
        </main>
        :
        <p>Loading...</p>
    )
}

const TermekTeszt = {
    id: 0,
    name: "Orbán Viktor",
    creator: "Sípos Erzsébet",
    category: "Otthon",
    price: 5000,
    likes: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Orb%C3%A1n_Viktor_2018.jpg/1200px-Orb%C3%A1n_Viktor_2018.jpg"
}

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 1vw;
    flex-grow: 1;
`;
