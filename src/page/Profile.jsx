import React, {useState,useEffect} from "react";
import styled from 'styled-components';

import Comments from '../component/multipleUse/Comments';
import LoadingIcon from "../component/multipleUse/LoadingIcon";
import ItemContainer from '../component/multipleUse/ItemContainer';
import NameAndPics from '../component/profile/NameAndPics';
import Description from '../component/profile/Description';
import { BtnInput, P } from "../css/FormStyledComponents";

import '../css/pageContent.css';    //use "main" element as page container
import { getProfileByClientId } from "../api/ProfileApi";
import { getAllByClientId as getAllComments } from '../api/CommentApi';
import { getProductsByClientId } from '../api/ProductApi';
import { getIsArtist } from "../api/ClientApi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ControlMenu from "../component/profile/ControlMenu";
import Follow from "../component/profile/Follow";

export const Profile = (props) => {

    const clientId = props.match.params.clientId;

    const history = useHistory();

    const state = useSelector((state) => state);

    const [currentClientId,setCurrentClientId] = useState("");
    const [profileData, setProfileData] = useState();
    const [productData, setProductData] = useState();
    const [isLoaded , setIsLoaded] = useState(false);
    const [commentData, setCommentData] = useState();
    const [isArtist, setIsArtist] = useState();

    const addNewProduct = () => {
        history.push("/addProduct")
    }
    const changeToCreator = () =>  {
        history.push("/beACreator")
    }

    useEffect(() => {
        setCurrentClientId(state.userId);
        getProfileByClientId(clientId)
            .then(response=>{
                setProfileData(response.data);                  
            }).then(getProductsByClientId(clientId)
            .then(responseProducts=>{
                setProductData(responseProducts.data)
            })).then(response2 => {getAllComments(clientId)
                .then(response2 => {
                    setCommentData(response2.data);
                }).then(getIsArtist(clientId).then(response3 => 
                    {setIsArtist(response3.data)
                        console.log("Is user artist?: " + response3.data)
                    }))
                .then(response4 => setIsLoaded(true))} )
        },[state,clientId]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        
        isLoaded ?
        <main>
            {clientId == currentClientId ? <ControlMenu/> : <Follow/>}
            <FlexContainer>
                <NameAndPics clientName={profileData.name} clientTitle={profileData.title} clientId={clientId}/>
                <Description description={profileData.longDescription}/>
                {isArtist ? 
                    <React.Fragment>
                        <ProductsAndServices>
                            <ProductTitle>Termékek</ProductTitle>
                            <ItemContainer items={productData}/>
                            <ProductTitle>Szolgáltatások</ProductTitle>
                            <ItemContainer items={productData}/>
                        </ProductsAndServices>
                        <Comments data={commentData}/>     
                    </React.Fragment>
                : 
                    <React.Fragment>
                        <P>Légy te is alkotó!</P>
                        <BtnInput onClick={changeToCreator} value="Alkotó leszek!"></BtnInput>
                    </React.Fragment>
                }
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

const ProductTitle = styled.p`
    margin: 20px 50vw -10px 0px;
`;

//const FollowButton = styled

/*
const commentLoadingStyle = {
    textAlign: 'center',
    marginTop: '10vh',
    marginBottom: '50vh'
}
*/