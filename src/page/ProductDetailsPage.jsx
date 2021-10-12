import React, {useState,useEffect} from "react";
import styled from "styled-components";

import { getProductById } from "../api/ProductApi";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { CartActionCreators } from "../state/CartActions";

export const ProductDetailsPage = (props) => {
    
    const productId=props.match.params.productId;
    const history = useHistory();

    const dispatch = useDispatch();    
    const { addToCart,removeFromCart } = bindActionCreators( CartActionCreators, dispatch);

    const [productData,setProductData]=useState();
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        getProductById(productId)
            .then(response=>{
                console.log(response.data)
                setProductData(response.data)
            }).then(response2=>setIsLoaded(true))
    },[])

    return (
        isLoaded ? 
        <main style={flex}>
        <Container>
            <h1>{productData.name}</h1>
            <p>{productData.price}</p>
            <button onClick={()=>addToCart(productData.id)}>Add to cart</button>
        </Container>
        </main>
        :
        <p>Loading</p>              
      );
}

const flex = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center'
}

const Container = styled.div`
    width: 50vw;
    height: 50vh;
    background-color: #0000001d;
    color: #abb5d6;
`;
