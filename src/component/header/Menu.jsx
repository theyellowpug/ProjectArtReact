import React from 'react';
import styled from 'styled-components';

export default function Menu() {
    return (
        <MenuContainer>
            <ButtonsWrapper id="headerMenu">
            <MenuButton><Link href="/hirfolyam">Ajánló</Link></MenuButton>
            <MenuButton><Link href="/termekek">Termékek</Link></MenuButton>
            <MenuButton><Link href="/szolgaltatasok">Szolgáltatások</Link></MenuButton>
            <MenuButton><Link href="/alkotok">Alkotók</Link></MenuButton>
            <MenuButton><Link href="/alkotoknak">Alkotóknak</Link></MenuButton>
            <MenuButton><Link href="/statisztika">Statisztika</Link></MenuButton>
            </ButtonsWrapper>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    height: 4vh;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 11vh;
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
    transition: all 165ms ease-in-out;

    &:hover {
        font-size: 17px;
        color: #fffecf;
    }
`;
