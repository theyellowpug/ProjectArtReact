import React from 'react';
import styled from 'styled-components';
import {H1, LeftAlign, Form, Input, BtnInput, Container} from '../../css/FormStyledComponents';

export default function Upload() {
    return (
        <Container>
            <H1>Feltöltés</H1>
            <TopSection>
                <span>
                    <InputTitle>Termék/Szolgáltatás neve:</InputTitle>
                    <Input type="text" name="name" id="name" placeholder="Elképesztő alkotás"></Input>
                </span>
                <span>
                    <InputTitle>Hirdetés borítóképe</InputTitle>
                     
                </span>
            </TopSection>           
        </Container>
    )
}
// Név, Leírás, Ár, ProductVagySzolgaltatas, Kepek 
const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
`;

const InputTitle = styled.p`
    margin: 0 10px;
`;