import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

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
    height: 7vh;
    width: 70%;
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding-top: 12vh;
`;

const ButtonsWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
`;

const MenuButton = styled.li `
    height: 60px;
    padding: 0 1.3em;
    color: #d1efff;
    font-weight: 600;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    list-style: none;

    cursor:pointer;
    text-decoration: none;
    transition: all 165ms ease-in-out;

    &:hover {
        color: #fffecf;
    }

`;