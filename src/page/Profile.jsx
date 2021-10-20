import React, {useState,useEffect} from "react";
import styled from 'styled-components';

import Comments from '../component/functional/Comments';
import ItemContainer from '../component/profile/ItemContainer';
import NameAndPics from '../component/profile/NameAndPics';
import Description from '../component/profile/Description';

import '../css/pageContent.css';    //use "main" element as page container
import { getProfileByClientId } from "../api/ProfileApi";

export const Profile = (props) => {

    const [profileData, setProfileData] = useState();
    const [isLoaded , setIsLoaded] = useState(false);

    useEffect(() => {
        getProfileByClientId(props.clientId)
        .then(response=>{
            setProfileData(response.data)
        }).then(response2=>setIsLoaded(true))
    }
    ,[])

    return (
        isLoaded ?
        <main>
        <FlexContainer>
            <NameAndPics profileData={profileData}/>
            <Description description="leiras"/>
            <ProductsAndServices>
                <ItemContainer/>
                <ItemContainer/>
            </ProductsAndServices>
            <Comments/>
        </FlexContainer>
        </main>
        :
        <p>Loading...</p>
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


