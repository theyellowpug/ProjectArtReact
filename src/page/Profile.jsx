import React, {useState,useEffect} from "react";
import styled from 'styled-components';

import Comments from '../component/multipleUse/Comments';
import LoadingIcon from "../component/multipleUse/LoadingIcon";
import ItemContainer from '../component/multipleUse/ItemContainer';
import NameAndPics from '../component/profile/NameAndPics';
import Description from '../component/profile/Description';

import '../css/pageContent.css';    //use "main" element as page container
import { getProfileByClientId } from "../api/ProfileApi";
import { getAllByClientId as getAllComments } from '../api/CommentApi';
import { getProductsByClientId } from '../api/ProductApi';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Profile = (props) => {

    const clientId = props.match.params.clientId;

    const history = useHistory();

    const state = useSelector((state) => state);

    const [currentClientId,setCurrentClientId] = useState("");
    const [profileData, setProfileData] = useState();
    const [productData, setProductData] = useState();
    const [isLoaded , setIsLoaded] = useState(false);
    const [commentData, setCommentData] = useState();

    const addNewProduct = () => {
        history.push("/addProduct")
    }

    useEffect(() => {
        setCurrentClientId(state.userId)
        getProfileByClientId(clientId)
            .then(response=>{
                setProfileData(response.data);
                console.log(response.data)
            }).then(getProductsByClientId(clientId)
            .then(responseProducts=>{
                setProductData(responseProducts.data)
            })).then(response2 => {getAllComments(clientId)
                .then(response2 => {
                    setCommentData(response2.data);
                }).then(response3 => setIsLoaded(true))} )
        },[state]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        isLoaded ?
        <main>
        <FlexContainer>
            {clientId==currentClientId ? <button onClick={addNewProduct}>Add New Product</button> : <button>Like/follow placeholder</button> }
            <NameAndPics clientName={profileData.name} clientTitle={profileData.title}/>
            <Description description={profileData.longDescription}/>
            <ProductsAndServices>
                <ItemContainer items={productData}/>
                <ItemContainer items={productData}/>
            </ProductsAndServices>
            <Comments data={commentData}/>         
        </FlexContainer>
        </main>
        :
        <LoadingIcon/>
    )
}

// flex elements

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
`;

const ProductsAndServices = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
`;
/*
const commentLoadingStyle = {
    textAlign: 'center',
    marginTop: '10vh',
    marginBottom: '50vh'
}
*/