import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

const CommentCard = (props) => {
    return (
        <Container>
            <LazyLoadImage style={IMG} src="https://upload.wikimedia.org/wikipedia/commons/8/87/CNC_Tiberium_Symbol.png"/>
            <TextContainer>
                <h3>{props.comment.ownerName}</h3>
                <p>{props.comment.text}</p>
            </TextContainer>
        </Container>
    )
}
export default CommentCard;

const Container = styled.div`
    width: 70%;
    background-color: #e3e6f0;
    border-radius: 7px;
    margin-top: 5px;
    padding: 5px 5px;

    display: flex;
`;

const IMG = {
    maxWidth: '20%',
    margin: '0px 5px 5px 5px'
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-left: 30px;
`;
