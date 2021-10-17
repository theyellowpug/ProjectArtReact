import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Messages from './Messages';
import Messenger from './Messenger';
// DUMMY MESSAGE
import dummyMessages from './dummyMessages.json';

const MessageModal = (props) => {

    const [messages, setMessages] = useState(dummyMessages);
    const [openedMessage, setOpenedMessage] = useState();
    useEffect(() => {
        //fetch from api
    },[/* ??? */])

    return (
        <ModalContainer onClick={props.setClosed}>
            <MessagesContainer>
                <Messages messageData={messages}/>
                <Messenger messageDate={openedMessage}/>
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
