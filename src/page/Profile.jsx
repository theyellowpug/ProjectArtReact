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

export const Profile = () => {

    const [profileData, setProfileData] = useState();
    const [isLoaded , setIsLoaded] = useState(false);
    const [commentData, setCommentData] = useState();

    useEffect(() => {
        getProfileByClientId(1)
        .then(response=>{
            setProfileData(response.data)
        }).then(response2=>getAllComments(1)
            .then(response3 => {
                setCommentData(response3.data);
            }).then(response4 => setIsLoaded(true)))
    },[])

    return (
        isLoaded ?
        <main>
        <FlexContainer>
            <NameAndPics clientName={profileData.name} clientTitle={profileData.title}/>
            <Description description={profileData.longDescription}/>
            <ProductsAndServices>
                <ItemContainer/>
                <ItemContainer/>
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

const commentLoadingStyle = {
    textAlign: 'center',
    marginTop: '10vh',
    marginBottom: '50vh'
}


