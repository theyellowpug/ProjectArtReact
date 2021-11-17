import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ArticleCard = (props) => {

    const history=useHistory();

    const forwardToArticlePage = (event) =>{
        event.preventDefault();
        history.push("/cikk")   //ide kell majd az article ID
    }

    return (
        <Container onClick={forwardToArticlePage}>
            <LazyLoadImage style={IMG} src={props.article.img}/>
            <Description>
                <Title>{props.article.title}</Title>
                <Text>{props.article.text}</Text>
            </Description>
            <RightSection>
                <h2>Like</h2>
            </RightSection>
        </Container>
    )
}
export default ArticleCard;

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

    &:hover{
        background-color: #b0c5ec;
        cursor: pointer;
    }
`;

const Description = styled.div`
    background-color: black;
    width: 45vw;
    height: 20vh;
    color: white;
`;

    const Title = styled.p`
        font-size: 24px;
        color: #ffa;
        margin: 4px;
    `;
    const Text = styled.p`
        margin: 6px;
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