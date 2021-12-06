import React from 'react';
import styled from 'styled-components';
import {Form_row, Input, BtnInput} from '../../css/FormStyledComponents';

export default function SearchBar() {
    return (
        <Container>
            <Form_row>
                <p style={TextMargin}>Név:</p>
                <Input type="text"></Input>
            </Form_row>
        </Container>
    )
}

const TextMargin = {
    margin: "0px 10px"
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fff5f5;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 5px 0px;
    border: 1px solid gray;
`;
