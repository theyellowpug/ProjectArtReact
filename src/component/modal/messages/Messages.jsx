import React from 'react';
import styled from 'styled-components';

import MessageCard from './MessageCard';

const Dummy = {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/1024px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png',
    partner: 'FBI',
    message: 'Open up!'
}

const Messages = (props) => {
    return (
        <MessagesContainer>
            <h1>Üzenetek</h1>
            <MessageCardContainer>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
                <MessageCard messageData={Dummy}/>
            </MessageCardContainer>
        </MessagesContainer>
    )
}
export default Messages;

const MessagesContainer = styled.div`
    width: 33%;
    height: 98%;
    margin: 0px 3px;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0 0 3px 3px #00000050;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MessageCardContainer = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 95%;
    width: 97%;
    border-radius: 5px;
    background-color: #e6e6e6;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
