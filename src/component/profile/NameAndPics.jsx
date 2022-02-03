import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getProfilePic } from '../../api/ProfileApi';
import defaultProfilePic from '../../VisualElements/defaultProfilePic.png';

import Highlights from './Highlights';

const NameAndPics = (props) => {

    const [profilePic, setProfilePic] = useState(defaultProfilePic);
    
    useEffect(() =>{
        getProfilePic(props.clientId).then(
            response => {
                if(response.status == 200) //the requested image is stored on the server & the download was succesful
                {
                    setProfilePic("data:image/jpeg;base64," + response.data);
                }
            }
        )
    },[])

    return (
        <Container>
            <LeftSection>
                <LazyLoadImage style={ProfilePic} src={profilePic}/>
                <Name>{props.clientName}</Name>
                <Title>{props.clientTitle}</Title>
            </LeftSection>
            <Highlights/>
            <FollowEdit><p>Follow</p><p>Followers: 42</p></FollowEdit>
        </Container>
    )
}
export default NameAndPics;

const Container = styled.div`
    display: flex;
    align-self: center;
    flex-direction: row;
    align-items: center;
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ProfilePic = {
    alignSelf: 'flex-start',
    height: '40vh',
    marginTop: '2vh'
};

const FollowEdit = styled.div`
    background-color: #804949;
    width: 5vw;
    height: 13vh;
    margin-left: 1vw;
    align-self: flex-start;
    margin-top: 3vh;
    text-align: center;
`;

const Name = styled.p`
    font-size: 38px;
    margin: 0px 0vh;
`;
const Title = styled.p`
    margin-top: 0px;
    color: #696969;
`;

