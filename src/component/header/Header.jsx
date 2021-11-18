import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import Menu from './Menu';
import anim_sun  from "../../VisualElements/anim_Sun.mp4";
import anim_moon from "../../VisualElements/anim_Moon.mp4";
import NotificationBar from './NotificationBar';    
import { TimeAndDate } from '../../utilities/TimeAndDate';

import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { JwtTokenActionCreators } from "../../state/actions/JwtTokenActions";
import { refreshToken } from '../../api/AuthenticationApi';

const time = TimeAndDate();

export default function Header(props) {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { setJwtToken, removeJwtToken} = bindActionCreators( JwtTokenActionCreators, dispatch);

    const refresh = () => {
        refreshToken()
            .then(response=>{
                setJwtToken(response.data.access_token)
                localStorage.setItem("refresh_token", response.data.refresh_token)
            }) 
        //** Note: Timeout should be shorter then the exipration time of the token(set in the backend)*/
        setTimeout(() => {
            refresh()
          }, 5*60*1000); 
    }

    useEffect(()=>{
        refresh()  
    },[])

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
    left: '14.5vw',
    height: '10vh'
}

const HeaderContainer = styled.div`
    width: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: -7.5vh;

    height: 13.5vh;
    min-height: 125px;
    box-shadow: 0 6px 4px #8fa0ba;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimeAndDateContainer = styled.div`
    position: absolute;
    left: 0;
    padding-left: 1.7vw;
    padding-top: 9vh;
`;

const TimeAndDateText = styled.p`
    font-weight: 550;
    opacity: 65%;
`;