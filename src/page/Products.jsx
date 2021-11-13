import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllProducts } from '../api/ProductApi';
import { ProductCard } from '../component/product/ProductCard';

const TermekTeszt = {
    id: 1,
    name: "Orbán Viktor",
    creator: "Sípos Erzsébet",
    category: "Otthon",
    price: 5000,
    likes: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Orb%C3%A1n_Viktor_2018.jpg/1200px-Orb%C3%A1n_Viktor_2018.jpg"
}


export default function Products() {

    const state = useSelector((state) => state);

    useEffect(()=>{
            getAllProducts().then(response=>console.log(response.data))
    },[])

    return (
        <Main>
           <ProductCard product={TermekTeszt}/>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 70px;
`;

