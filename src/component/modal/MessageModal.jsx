import React from 'react';
import styled from 'styled-components';

const MessageModal = (props) => {
    return (
        <ModalContainer onClick={props.setClose}>
            <MessagesContainer>

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
    width: 20vw;
    height: 50vh;
    background-color: green;

    display: flex;
`;
