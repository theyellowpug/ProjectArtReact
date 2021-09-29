import React from 'react';
import styled from 'styled-components';
import ProductCard from '../component/product/ProductCard';

export default function Products() {
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

const TermekTeszt = {
    name: "Orbán Viktor",
    creator: "Sípos Erzsébet",
    category: "Otthon",
    price: 5000,
    likes: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Orb%C3%A1n_Viktor_2018.jpg/1200px-Orb%C3%A1n_Viktor_2018.jpg"
}
