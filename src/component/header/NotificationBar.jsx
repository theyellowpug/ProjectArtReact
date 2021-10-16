import React, {useState,useEffect} from "react";
import styled from 'styled-components';
//
import MessageModal from '../modal/MessageModal';

export default function NotificationBar() {

    const [messageIsOpen, setMessageIsOpen] = useState(false);
    const [notifIsOpen, setNotifIsOpen] = useState(false);
    const [savedIsOpen, setSavedIsOpen] = useState(false);

    function ClickedMessage() {
        setMessageIsOpen(true);
    }
    function ClickedNotif() {
        setNotifIsOpen(true);
    }
    function ClickedSaved() {
        setSavedIsOpen(true);
    }
    function CloseModals() {
        setMessageIsOpen(false);
        setNotifIsOpen(false);
        setSavedIsOpen(false);
    }

    return (
        <NotificationContainer>
            { messageIsOpen ? <MessageModal setClose={CloseModals}/> : null }
            { notifIsOpen ? <MessageModal setClose={CloseModals}/> : null }
            { savedIsOpen ? <MessageModal setClose={CloseModals}/> : null }
            <NotificationButton onClick={ClickedMessage}>Ü</NotificationButton>
            <NotificationButton onClick={ClickedNotif}>É</NotificationButton>
            <NotificationButton onClick={ClickedSaved}>M</NotificationButton>
        </NotificationContainer>
    )
}

const NotificationContainer = styled.div`
    position: absolute;
    top: 105px;
    right: 200px;
    width: 170px;
    height: 40px;
    display: flex;
    align-items: center;
`;

const NotificationButton = styled.div`
    width: 30px;
    height: 30px;
    background-color: #48505490;
    border-radius: 6px;
    display: flex;
    margin-left: 6px;
    z-index: 2;

    &:hover{
        background-color: #303030c8;
        cursor: pointer;
    }
`;
