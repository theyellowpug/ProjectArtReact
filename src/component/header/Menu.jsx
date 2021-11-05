import React from 'react';
import styled from 'styled-components';

export default function Menu() {
    return (
        <MenuContainer>
            <ButtonsWrapper>
            <MenuButton><Link href="/">Ajánló</Link></MenuButton>
            <MenuButton><Link href="/products">Termékek</Link></MenuButton>
            <MenuButton><Link href="/services">Szolgáltatások</Link></MenuButton>
            <MenuButton><Link href="/artist">Alkotók</Link></MenuButton>
            <MenuButton><Link href="/profile">Profil</Link></MenuButton>
            <MenuButton><Link href="/statistics">Statisztika</Link></MenuButton>
            </ButtonsWrapper>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    height: 40px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 105px;
`;

const ButtonsWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
`;

const MenuButton = styled.li `
    height: 38px;
    padding: 0 1.3em;
    color: #d1efff;
    font-weight: 600;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    list-style: none;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    transition: all 200ms ease-in-out;

    &:hover {
        font-size: 17px;
        color: #fffecf;
    }
`;
