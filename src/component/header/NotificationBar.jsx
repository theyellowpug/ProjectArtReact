import React, {useState,useEffect} from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';

//
import MessageModal from '../modal/messages/MessageModal';

export default function NotificationBar() {

    const [messageIsOpen, setMessageIsOpen] = useState(false);
    const [notifIsOpen, setNotifIsOpen] = useState(false);
    const [savedIsOpen, setSavedIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
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
    function logOut(){
        // log out
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
                <NotificationButton onClick={ClickedMessage}>Üzenetek</NotificationButton>
                <NotificationButton onClick={ClickedNotif}>Értesítések</NotificationButton>
                <NotificationButton onClick={ClickedSaved}>Mentett</NotificationButton>
                <NotificationButton onClick={logOut}>Kijelentkezés</NotificationButton>
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
    top: 8vh;
    right: 6vw;
    //width: 170px;
    height: 40px;
    display: flex;
    align-items: center;
`;

const NotificationButton = styled.div`
    margin-top: 10px; 
    color: #313131;
    min-width: 30px;
    height: 24px;
    padding: 1px 3px;
    background: white;
    border-radius: 6px;
    margin-left: 6px;
    z-index: 2;
    text-align: center;
    box-shadow: 1px 1px #00000070;

    transition: all 400ms ease;
    &:hover{
        background: #5b7db5; 
        cursor: pointer;      
        box-shadow: 0px 0px 4px 4px white;
        color: #ecf0f6
    }
`;
