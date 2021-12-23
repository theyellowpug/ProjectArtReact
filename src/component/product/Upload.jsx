import React, { useState } from 'react';
import styled from 'styled-components';

import {H1, Form, Input, BtnInput, Container} from '../../css/FormStyledComponents';
import { postProduct } from '../../api/ProductApi';

export default function Upload() {

    const [uploadData, setUploadData] = useState(
        {
            productType: "ITEM",
            name: "string",
            price: 0,
            description: "string"
          }
    )

    const submitHandler = e => {
        e.preventDefault();
        setUploadData({
            productType: "ITEM",
            name: e.target.elements.name.value,
            price: e.target.elements.price.value,
            description: e.target.elements.description.value
        });
        console.log(uploadData);
        postProduct(1, uploadData);
    }

    return (
        <Container>
            <Form onSubmit={submitHandler} name="up" id="up">
                <H1>Feltöltés</H1>
                <Section>
                    <InputTitle>Termék/Szolgáltatás neve:</InputTitle>
                    <Input type="text" name="name" id="name" placeholder="Elképesztő alkotás"></Input>
                </Section>   
                <Section>  
                    <InputTitle>Pipáld ki a négyzetet, ha szolgáltatást töltesz fel!</InputTitle>
                    <input type="checkbox" name="isService" id="isService" style={checkBox}></input>  
                </Section>
                <Section>
                    <InputTitle>Termék/Szolgáltatás ára:</InputTitle>
                    <Input type="number" name="price" id="price" min="100" max="1000000"></Input>    
                </Section>
                <Section>
                    <span>
                        <InputTitle>Termék/Szolgáltatás leírása:</InputTitle>
                        <TextArea form="up" cols="70" rows="8" maxLength="500" name="description" id="description"></TextArea>
                    </span>
                </Section>
                <BtnInput type="submit"></BtnInput>
            </Form>
        </Container>
    )
}
// Név, Leírás, Ár, ProductVagySzolgaltatas, Kepek 
const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-bottom: 15px;
`;

const InputTitle = styled.p`
    margin: 0 10px;
`;

const checkBox = {
    height: '15px',
    width: '15px'
}

const TextArea = styled.textarea`
    margin-top: 10px;
    padding: 10px 10px;
    resize: none;
`;