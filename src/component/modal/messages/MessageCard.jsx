import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

const MessageCard = (props) => {
    return (
        <Container onClick={console.log('message click') /* props.openMessage */}>
            <LazyLoadImage style={imgStyle} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'/>
            <TextContainer>
                <PartnerName>{props.messageData.partner}</PartnerName>
                <MessageText>{props.messageData.message}</MessageText>
            </TextContainer>
        </Container>
    )
}
export default MessageCard;

const Container = styled.div`
    width: 100%;
    height: 50px;
    margin: 1px 1px;
    background-color: #444444;
    border-radius: 4px;
    
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover{
        background-color: gray;
        cursor: pointer;
    }
`;

const imgStyle = {
    height: '95%',
    padding: '0% 1% 0% 1%'
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PartnerName = styled.p`
    color: white;
    margin-top: 2%;
    margin: 0;
`;

const MessageText = styled.p`
    color: #fff4d5;
    margin: 0;
    font-size: 10px;
`;