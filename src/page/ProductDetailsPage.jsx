import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { getProductById } from "../api/ProductApi";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { CartActionCreators } from "../state/actions/CartActions";
import LoadingIcon from "../component/multipleUse/LoadingIcon";
import { getAllByProductId as getAllComments } from "../api/CommentApi";
import Comments from '../component/multipleUse/Comments';
import { addProductsToCartByClientId } from "../api/CartApi";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { getClientIdByEmail } from '../api/ClientApi';

export const ProductDetailsPage = (props) => {
    
    const productId = props.match.params.productId;
    const history = useHistory();

    const state = useSelector((state) => state);

    const [productData,setProductData]=useState();
    const [commentData, setCommentData] = useState();
    const [isLoaded,setIsLoaded]=useState(false);

    const addAndForwardToCartPage = (id) =>{

        state.accessToken!=="" 
        ? 
        getClientIdByEmail(jwt_decode(state.accessToken).sub)
            .then(respone=>addProductsToCartByClientId(respone.data, productId)
                .then(response2=>history.push("/cart"))) 
        : history.push("/login")
    }

    useEffect(()=>{
        getProductById(productId)
            .then(response=>{
                setProductData(response.data)
            }).then(response2=> {getAllComments(productId)
            .then(response2 => {
                console.log(response2);
                setCommentData(response2.data);
            }).then(response3 => setIsLoaded(true))} )
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
            isLoaded ? 
            <main>
                <Container>
                    <ProductImage src="https://thepaintsesh.com/wp-content/uploads/2019/01/EnchantedForrest-800x800.jpg"/>
                    <RightSection>  
                        <ProductName>{productData.name}</ProductName>
                        <ProductDescription>{productData.description}</ProductDescription>
                        <ProductPrice>Ár: {productData.price}.- Ft</ProductPrice>
                        <AddToCartButton onClick={()=>addAndForwardToCartPage(productData.id)}>Megveszem!</AddToCartButton>
                    </RightSection>
                </Container>
                <Comments data={commentData}/>
            </main>
            :
            <LoadingIcon/>           
      );
}

const Container = styled.div`
    width: 85vw;
    background-color: #0000001d;
    color: #abb5d6;
    margin: 2% auto;
    border-radius: 5px;
    box-shadow: 5px 5px 1px 1px #0000003b;

    display: flex;
    align-items: center;
`;

const ProductImage = styled.img`
    max-width: 30%;
    max-height: 50vh;
    padding: 5vh 5vh;
`;

const RightSection = styled.div`
    margin: 0px 3% 5px 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 0px;
    flex-shrink: 0;
`;

const ProductName = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: black;
`;

const ProductDescription = styled.p`
    align-self: center;
`;

const ProductPrice = styled.p`
    align-self: flex-end;
    font-size: 18px;
`;

const AddToCartButton = styled.button`
    align-self: flex-end;
    font-size: 24px;
`;
/*
const commentLoadingStyle = {
    textAlign: 'center',
    marginTop: '10vh',
    marginBottom: '50vh'
}
*/