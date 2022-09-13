import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
//import {white, nature_green, soft_shadow} from '../../css/COLORS.jsx';

export default function Menu() {

    const history=useHistory()

    const switchSite = (targetSite) =>{
        history.push(targetSite)
    }

    return (
        <MenuContainer>
            <ButtonsWrapper id="headerMenu">
                <MenuButton onClick={()=>switchSite("/")}>Ajánló</MenuButton>
                <MenuButton onClick={()=>switchSite("/products")}>Termékek</MenuButton>
                <MenuButton onClick={()=>switchSite("/services")}>Szolgáltatások</MenuButton>
                <MenuButton onClick={()=>switchSite("/creators")}>Alkotók</MenuButton>
                <MenuButton onClick={()=>switchSite("/creatorHQ")}>Profil</MenuButton>
                <MenuButton onClick={()=>switchSite("/statistics")}>Statisztika</MenuButton>
            </ButtonsWrapper>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: baseline;
    justify-content: center;
`;

const ButtonsWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    margin-top: auto;
`;

const MenuButton = styled.li `
    margin: 0 1.0em;
    padding: 0.2em 0.5em;
    color: white;
    font-weight: 600;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    list-style: none;
    border-radius: 3px;

    cursor:pointer;
    text-decoration: none;
    transition: all 165ms ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 2px 2px #00000053;
    }

`;