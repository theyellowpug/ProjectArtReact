import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Messages from './Messages';
import Messenger from './Messenger';

const MessageModal = (props) => {
/*
    const [messages, setMessages] = useState();
    const [openedMessage, setOpenedMessage] = useState();
    useEffect(() => {
        //fetch from api
    },[ ??? ])
*/
    return (
        <ModalContainer>
            <CloseButton onClick={props.setClosed}><p>Bezárás</p></CloseButton>
            <MessagesContainer>
                <Messages /*messageData={messages}*//>
                <Messenger /*messageDate={openedMessage}*//>
            </MessagesContainer>
        </ModalContainer>
    )
}
export default MessageModal;

const ModalContainer = styled.div`
    //display: none;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #535d6e99;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MessagesContainer = styled.div`
    width: 42vw;
    height: 75vh;
    z-index: 100;
    background-color: #ffffff20;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const CloseButton = styled.div`
    border-radius: 5px;
    position: relative;
    height: 2em;
    width: 5em;
    background-color: #ff0000d1;
    box-shadow: 0px 0px 4px 4px #ffffff84;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: white;
        cursor: pointer;
    }
`;
