import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import ProductCard from '../product/ProductCard';
import ScrollerArrow from './ScrollerArrow';

//uses same card components as on market pages
export const ItemContainer = (props) => {

    const [startIndex, setStartIndex] = useState(0);

    return (
        <Container>
            {
            (props.items.length == 0)
            ?
                <p>Úgy tűnik nincs hozzáadott termék!</p>
            :
                <React.Fragment>
                    <EmptyArea/>
                    {props.items.map(product=><ProductCard key={product.id} product={product}/>)}
                </React.Fragment>
            }
        </Container>
    )
}
export default ItemContainer;

const Container = styled.div`
    margin: 20px;
    padding: 0vh 3vw;
    width: 70vw;
    height: 30vh;
    min-height: 100px;
    background-color: #bdbdbd25;
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    overflow-x: scroll;
    overflow-y: hidden;
    wrap: nowrap;
`;

const EmptyArea = styled.span`
    height: 10px;
    width: 1px;
    margin-right: 30vw;
`;