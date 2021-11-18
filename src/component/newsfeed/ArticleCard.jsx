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
    background: radial-gradient(circle, rgba(231,233,240,1) 0%, rgba(107,159,199,1) 100%); 
    box-shadow: 2px 2px #4b4c4d80;
    border-radius: 8px;
    border: 1px solid #0d0d0e70;
    align-self: center;

    display: flex;
    align-items: center;

    &:hover{
        cursor: pointer;
        background: radial-gradient(circle, rgba(231,233,240,1) 0%, #bacddb 100%);
    }
`;

const Description = styled.div`
    background-color: rgba(73,111,173,1);
    padding: 10px 20px;
    border-radius: 10px;
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
    background-color: #9696b9;
    width: 10vw;
    height: 20vh;
    margin-left: 5px;
    color: white;
    text-align: center;
`;

const IMG = {
    height: '26vh'
}

// img | short article | like