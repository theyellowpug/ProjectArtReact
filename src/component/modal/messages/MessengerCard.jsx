import React from 'react';
import styled from 'styled-components';

const MessengerCard = (props) => {
    if(props.messageData.recieved === 'true')
        return (
            <Container style={recievedStyle}>
                <MessageText>{props.messageData.text}</MessageText>
            </Container>
        ) 
    else
        return (
            <Container style={sentStyle}>
                <MessageText>{props.messageData.text}</MessageText>
            </Container>
        )
}
export default MessengerCard;

const Container = styled.span`
    margin: 1% 1%;
    background-color: #8eafd4;
    border-radius: 10%;
    box-shadow: 2px 2px 1px 1px #000000;
    margin-bottom: 20px;
`;

const MessageText = styled.p`
    padding: 0px 3px;
    color: white;
    font-size: 14px;
`;

const recievedStyle = {
    alignSelf: 'flex-start',
    marginLeft: '5%'
}

const sentStyle = {
    alignSelf: 'flex-end',
    marginRight: '5%'
}