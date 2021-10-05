import React from 'react';
import styled from 'styled-components';
import ProductCard from '../component/product/ProductCard';

import '../css/pageContent.css';    //use "main" element as page container

export default function Products() {
    return (
        <main>
            <FlexContainer>
                <ProductCard product={TermekTeszt}/>
            </FlexContainer>
        </main>
    )
}

const TermekTeszt = {
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
`;
