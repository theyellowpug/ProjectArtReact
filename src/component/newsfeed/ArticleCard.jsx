import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ArticleCard() {
    return (
        <Container>
            <LazyLoadImage style={IMG} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OOjs_UI_icon_article-ltr-progressive.svg/1024px-OOjs_UI_icon_article-ltr-progressive.svg.png"/>
            <Description>
                <h1>Cim</h1>
                <p>Leiras</p>
            </Description>
            <RightSection>
                <h2>Like</h2>
            </RightSection>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 5vh;
    width: 70vw;
    height: 30vh;
    background-color: #adb5c4;
    box-shadow: 5px 5px #4b4c4d80;
    border-radius: 5px;
    border: 1px solid #0d0d0e70;
    align-self: center;

    display: flex;
    align-items: center;
`;

const Description = styled.div`
    background-color: black;
    width: 45vw;
    height: 20vh;
    color: white;
`;

const RightSection = styled.div`
    background-color: black;
    width: 10vw;
    height: 20vh;
    margin-left: 5px;
    color: white;
`;

const IMG = {
    height: '26vh',
    with: '9vw'
}

// img | short article | like