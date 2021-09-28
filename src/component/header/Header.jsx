import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import Menu from './Menu';
import anim_sun  from "../../VisualElements/anim_Sun.mp4";
import anim_moon from "../../VisualElements/anim_Moon.mp4";
import NotificationBar from './NotificationBar';    

var today = new Date();
var month = (today.getMonth() + 1);
var date = today.getDate();
var day = today.getDay();
var a = "";
switch(month) {
    case 1: a += "Január "; break;
    case 2: a += "Február "; break;
    case 3: a += "Március "; break;
    case 4: a += "Április "; break;
    case 5: a += "Május "; break;
    case 6: a += "Júnuis "; break;
    case 7: a += "Július "; break;
    case 8: a += "Augusztus "; break;
    case 9: a += "Szeptember "; break;
    case 10: a += "Október "; break;
    case 11: a += "November "; break;
    case 12: a += "December "; break;
}
a += date + " ";
switch(day) {
    case 0: a += ", Vasárnap"; break;
    case 1: a += ", Hétfő"; break;
    case 2: a += ", Kedd"; break;
    case 3: a += ", Szerda"; break;
    case 4: a += ", Csütörtök"; break;
    case 5: a += ", Péntek"; break;
    case 6: a += ", Szombat"; break;
}

export default function Header(props) {
    /*
    return (
        props.day_night ? 
        <HeaderContainer style={headerDay}><HeaderElements/>
        <ReactPlayer style={celestialBody} url={anim_sun} controls={false} loop={true} playing={true} width='125px'></ReactPlayer>
        </HeaderContainer> :
        <HeaderContainer style={headerNight}><HeaderElements/>
        <ReactPlayer style={celestialBody} url={anim_moon} controls={false} loop={true} playing={true} width='125px'></ReactPlayer>
        </HeaderContainer>
    )
    */
    if(!props.day_night)
    {
        return (            
                <HeaderContainer style={headerDay}>
                    <NotificationBar />
                    <TimeAndDate><TimeAndDateText>{a}</TimeAndDateText></TimeAndDate>
                    <ReactPlayer style={celestialBody} url={anim_sun} controls={false} loop={true} muted={true} playing={true} width='125px'></ReactPlayer>
                    <Menu/>
                </HeaderContainer>
        )
    } else {
        return (
            <div>
                <HeaderContainer style={headerNight}>
                    <NotificationBar />
                    <ReactPlayer style={celestialBody} url={anim_moon} controls={false} loop={true} muted={true} playing={true} width='125px'></ReactPlayer>
                    <Menu/>
                </HeaderContainer>
            </div>
        )
    }
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

    width: 100%;
    height: 130px;
    box-shadow: 0 6px 4px #8fa0ba;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimeAndDate = styled.div`
    position: absolute;
    left: 0;
    padding-left: 20px;
    padding-top: 90px;
`;

const TimeAndDateText = styled.p`
    font-weight: 550;
    opacity: 65%;
`;

const HeaderElements = (
    <React.Fragment>
        <NotificationBar />
        <TimeAndDate><TimeAndDateText>{a}</TimeAndDateText></TimeAndDate>
    </React.Fragment>
)