import React from 'react';
import styled from 'styled-components';

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
    height: 30ex;
`;

const Title = styled.div`
    align-self: flex-start;
    font-size: 40px;
    padding: 0 5vw;
`;

const Text = styled.div`
    text-align: center;
    font-size: 20px;
`;

export default function Description() {
    return (
        <Container>
            <Title>Bemutatkozás:</Title>
            <Text>Leírás</Text>
        </Container>
    )
}
