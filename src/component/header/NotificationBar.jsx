import React, {useState,useEffect} from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
//
import MessageModal from '../modal/messages/MessageModal';

export default function NotificationBar() {

    const [messageIsOpen, setMessageIsOpen] = useState(false);
    const [notifIsOpen, setNotifIsOpen] = useState(false);
    const [savedIsOpen, setSavedIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    const forwardToLoginPage = (event) => {
        event.preventDefault();
        history.push("/bejelentkezes");
    }
    const forwardToRegisterPage = (event) => {
        event.preventDefault();
        history.push("/regisztracio");
    }

    function ClickedMessage() {
        setMessageIsOpen(true);
    }
    function ClickedNotif() {
        //open notifications
    }
    function ClickedSaved() {
        //open cart
    }
    function CloseModals() {
        setMessageIsOpen(false);
        setNotifIsOpen(false);
        setSavedIsOpen(false);
    }

    return (
        <NotificationContainer>
            { messageIsOpen ? <MessageModal setClosed={CloseModals}/> : null }
            { notifIsOpen ? <MessageModal setClosed={CloseModals}/> : null }
            { savedIsOpen ? <MessageModal setClosed={CloseModals}/> : null }
            { isLoggedIn ? returnNotificationBar() : returnLoginRegisterBar()}
        </NotificationContainer>
    )

    function returnNotificationBar(){
        return(
            <React.Fragment>
                <NotificationButton onClick={ClickedMessage}>Ü</NotificationButton>
                <NotificationButton onClick={ClickedNotif}>É</NotificationButton>
                <NotificationButton onClick={ClickedSaved}>M</NotificationButton>
            </React.Fragment>
        )
    }

    function returnLoginRegisterBar(){
        return(
            <React.Fragment>
                <NotificationButton onClick={forwardToLoginPage}>Bejelentkezés</NotificationButton>
                <NotificationButton onClick={forwardToRegisterPage}>Regisztráció</NotificationButton>
            </React.Fragment>
        )
    }
}

const NotificationContainer = styled.div`
    position: absolute;
    top: 105px;
    right: 200px;
    //width: 170px;
    height: 40px;
    display: flex;
    align-items: center;
`;

const NotificationButton = styled.div`
    color: #313131;
    min-width: 30px;
    height: 30px;
    padding: 1px 3px;
    background: radial-gradient(circle, rgba(231,233,240,1) 0%, rgba(107,159,199,1) 100%); 
    border-radius: 6px;
    margin-left: 6px;
    z-index: 2;
    text-align: center;
    box-shadow: 1px 1px #00000070;

    transition: all 200ms ease;
    &:hover{
        background: radial-gradient(circle, rgba(231,233,240,1) 0%, #bacddb 100%);
        cursor: pointer;
        height: 32px;
    }
`;
