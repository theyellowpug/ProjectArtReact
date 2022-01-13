import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import ProductCard from '../product/ProductCard';

//uses same card components as on market pages
export const ItemContainer = (props) => {
    const [itemIsOpened, setItemIsOpened] = useState(1);    //used in opening or closing the itemcontainer

    // used to reference this container from ChangeOpened, unique id generated with miliseconds passed since January 1, 1970
    const containerIdentifier = 'sizeRespone' + new Date().getTime();               
    // open or close the itemcontainer based on the itemIsOpen state
    const ChangeOpened = () => {                                                    
        let element = document.getElementById(containerIdentifier);
        if(itemIsOpened === 1){
            setItemIsOpened(0);
            element.style.height = '25vh';
            element.style.overflowX = 'scroll';
            element.style.overflowY = 'hidden';
            element.style.flexWrap = 'nowrap';
            element.style.marginBottom = '20px';
            element.style.width = '70vw';
        } else if (itemIsOpened === 0) {
            setItemIsOpened(1);
            element.style.height = '75vh';
            element.style.overflowX = 'clip';
            element.style.overflowY = 'scroll';
            element.style.flexWrap = 'wrap';
            element.style.marginBottom = '50px';
            element.style.width = '60vw';
        }
    }

    return (
        <React.Fragment>
        <Container id={containerIdentifier}>          
            {
            (props.items.length == 0)
            ?
                <p style={middle}>Úgy tűnik nincs hozzáadott termék!</p>
            :
                <React.Fragment>
                    {props.items.map(product=><ProductCard key={product.id} product={product}/>)}
                </React.Fragment>
            }
        </Container>
        <ShowMoreButton onClick={ChangeOpened}>Mutasd máshogy!</ShowMoreButton>
        </React.Fragment>
    )
}
export default ItemContainer;

const Container = styled.div`
    margin: 20px;
    padding: 1vh 1vw;
    width: 70vw;
    height: 25vh;
    min-height: 100px;
    background-color: #bdbdbd25;
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    /*
    justify-content: center;
    align-items: center;
    */
    align-content: flex-start;
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
`;

const Centering = styled.div`
    margin: auto;
`;

const ShowMoreButton = styled.button`
    width: 120px;
    height: 30px;
    margin-top: -40px;
`;

const middle = {
    margin: 'auto'
}