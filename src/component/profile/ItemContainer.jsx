import React from 'react';
import styled from 'styled-components';

import ProductCard from '../product/ProductCard';
import ScrollerArrow from './ScrollerArrow';

//uses same card components as on market pages
export default function ItemContainer() {
    return (
        <Container>
            <ScrollerArrow/>
            <ProductCard product={TermekTeszt}/>
            <ProductCard product={TermekTeszt}/>
            <ProductCard product={TermekTeszt}/>
            <ScrollerArrow/>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px;
    width: 80vw;
    height: 30vh;
    background-color: #bdbdbd25;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const TermekTeszt = {
    name: "Orbán Viktor",
    creator: "Sípos Erzsébet",
    category: "Otthon",
    price: 5000,
    likes: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Orb%C3%A1n_Viktor_2018.jpg/1200px-Orb%C3%A1n_Viktor_2018.jpg"
}