import React from 'react'
import styled from 'styled-components'

export default function NotificationBar() {

    function Clicked() {
        console.log('Notification bar click!');
    }

    return (
        <NotificationContainer>
            <NotificationButton onClick={Clicked}></NotificationButton>
            <NotificationButton onClick={Clicked}></NotificationButton>
            <NotificationButton onClick={Clicked}></NotificationButton>
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
