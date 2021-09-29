import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import Menu from './Menu';
import anim_sun  from "../../VisualElements/anim_Sun.mp4";
import anim_moon from "../../VisualElements/anim_Moon.mp4";
import NotificationBar from './NotificationBar';    
import { TimeAndDate } from '../../utilities/TimeAndDate';

const time = TimeAndDate();

export default function Header(props) {
    return(
        !props.isDay ?
        <HeaderContainer style={headerDay}>
            <NotificationBar />
            <TimeAndDateContainer><TimeAndDateText>{time}</TimeAndDateText></TimeAndDateContainer>
            <ReactPlayer style={celestialBody} url={anim_sun} controls={false} loop={true} muted={true} playing={true} width='125px'></ReactPlayer>
            <Menu/>
        </HeaderContainer>
        :
        <HeaderContainer style={headerNight}>
            <NotificationBar />
            <TimeAndDateContainer><TimeAndDateText>{time}</TimeAndDateText></TimeAndDateContainer>
            <ReactPlayer style={celestialBody} url={anim_moon} controls={false} loop={true} muted={true} playing={true} width='125px'></ReactPlayer>
            <Menu/>
        </HeaderContainer>
    )
}

const headerDay = {
    background: '#496fad',
}

const headerNight = {
    background: '#1a345e',
}

const celestialBody = {
    position: 'absolute',
    top: '-120px',
    right: '100px',
    height: '150px'
}

const HeaderContainer = styled.div`
    width: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: -70px;

    height: 130px;
    box-shadow: 0 6px 4px #8fa0ba;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimeAndDateContainer = styled.div`
    position: absolute;
    left: 0;
    padding-left: 20px;
    padding-top: 90px;
`;

const TimeAndDateText = styled.p`
    font-weight: 550;
    opacity: 65%;
`;