import React from 'react';
import styled from 'styled-components';

const MessageCard = (props) => {
    return (
        <Container onClick={console.log('message click') /* props.openMessage */}>
            
        </Container>
    )
}
export default MessageCard;

const Container = styled.div`
    width: 100%;
    height: 50px;
    margin: 1px 1px;
    background-color: black;

    &:hover{
        background-color: gray;
        cursor: pointer;
    }
`;