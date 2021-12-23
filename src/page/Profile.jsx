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

export const Profile = (props) => {

    //const clientId = props.match.params.clientId;     cannot use in useEffect in deployment

    const [profileData, setProfileData] = useState();
    const [productData, setProductData] = useState();
    const [isLoaded , setIsLoaded] = useState(false);
    const [commentData, setCommentData] = useState();

    useEffect(() => {
        getProfileByClientId(props.match.params.clientId)
            .then(response=>{
                setProfileData(response.data);
                console.log(response.data)
            }).then(getProductsByClientId(props.match.params.clientId)
            .then(responseProducts=>{
                setProductData(responseProducts.data)
            })).then(response2 => {getAllComments(props.match.params.clientId)
                .then(response2 => {
                    setCommentData(response2.data);
                }).then(response3 => setIsLoaded(true))} )
        },[])

    return (
        isLoaded ?
        <main>
        <FlexContainer>
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