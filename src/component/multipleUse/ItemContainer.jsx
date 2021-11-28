import React from 'react';
import styled from 'styled-components';

import ProductCard from '../product/ProductCard';
import ScrollerArrow from './ScrollerArrow';

//uses same card components as on market pages
export default function ItemContainer() {
    return (
        <Container>
            <ScrollerArrow />
                
            <ScrollerArrow/>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px;
    padding: 0vh 3vw;
    width: 70vw;
    height: 30vh;
    background-color: #bdbdbd25;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;