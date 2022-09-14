import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import { hasProfilePic } from '../../api/ProfileApi';
import defaultProfilePic from '../../VisualElements/defaultProfilePic.png';

import Highlights from './Highlights';

const NameAndPics = (props) => {

    const profPicURL = "http://139.59.129.133:8080/profile/getProfilePic?id=" + props.clientId;
    const [hasProfileImg, setHasProfileImg] = useState(false);
    useEffect(()=>{
        hasProfilePic(props.clientId).then(response => {
            console.log(response.status);
            if(response.status == 200)
                setHasProfileImg(true);
        })
    },[])

    return (
        <Container>
            <LeftSection>
                {hasProfileImg ?
                <img style={ProfilePic} src={profPicURL}/>
                :
                <img style={ProfilePic} src={defaultProfilePic}/>
                }
                <Name>{props.clientName}</Name>
                <Title>{props.clientTitle}</Title>
            </LeftSection>
            <Highlights/>
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
    marginTop: '2vh',
    borderRadius: '8px'
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

