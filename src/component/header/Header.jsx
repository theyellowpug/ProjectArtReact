import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import Menu from './Menu';
import anim_sun  from "../../VisualElements/anim_Sun.mp4";
import anim_moon from "../../VisualElements/anim_Moon.mp4";
import NotificationBar from './NotificationBar';   
import MainLogo from './MainLogo'; 
//import { TimeAndDate } from '../../utilities/TimeAndDate';

import { /*useSelector, */useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { AccessTokenActionCreators } from "../../state/actions/AccessTokenActions";
import { refreshToken } from '../../api/AuthenticationApi';
import { UserIdActionCreators } from '../../state/actions/UserIdActions';

import jwt_decode from "jwt-decode";
import { getClientIdByEmail } from '../../api/ClientApi';


//const time = TimeAndDate();

export default function Header(props) {

    const dispatch = useDispatch();
    const { setAccessToken/*, removeAccessToken*/} = bindActionCreators( AccessTokenActionCreators, dispatch);
    const { setUserId } = bindActionCreators(UserIdActionCreators,dispatch)


    const refresh = () => {
        refreshToken()
            .then(response=>{
                getClientIdByEmail(jwt_decode(response.data.access_token).sub).then(response2=>setUserId(response2.data))
                setAccessToken(response.data.access_token)
                localStorage.setItem("refresh_token", response.data.refresh_token)
            }) 
        //** Note: Timeout should be shorter then the exipration time of the token(set in the backend)*/
        setTimeout(() => {
            refresh()
          }, 5*60*1000); 
    };

    useEffect(()=>{
        refresh();
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <HeaderContainer>
            <MainLogo/>
            <Menu/>
            <NotificationBar />
        </HeaderContainer>
    )
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
    //top: -7.5vh;
    background: #5B7B7A;

    min-height: 6vh;
    box-shadow: 0 6px 4px #8fa0ba;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;
/*
const TimeAndDateContainer = styled.div`
    position: absolute;
    left: 0;
    padding-left: 1.7vw;
    padding-top: 9vh;
`;
*/
const TimeAndDateText = styled.p`
    font-weight: 550;
    opacity: 65%;
`;