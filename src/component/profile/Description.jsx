import React from 'react';
import styled from 'styled-components';

const Description = (props) => {
    return (
        <Container>
            <Title>Bemutatkozás:</Title>
            <Text>{props.description}</Text>
        </Container>
    )
}

export default Description;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    
    margin-top: 1vh;
    background-color: #bdbdbd50;
    border-radius: 15px;
    width: 80vw;
    min-height: 30ex;
`;

const Title = styled.div`
    align-self: flex-start;
    font-size: 35px;
    margin: -10vh 2vw;
    color: #5c5c5c;
`;

const Text = styled.div`
    text-align: center;
    font-size: 20px;
    margin: 0% 10%;
`;
