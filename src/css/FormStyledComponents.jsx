import styled from "styled-components";
// IMPORT THIS JSX TO USE PREDEFINED 
// STYLED COMPONENTS ON FORMS

// title of the form
const H1 = styled.h1`
    color: #496fad;
`;

// aligns text to the left
// used as "style={LeftAlign}" on Input elements
const LeftAlign = {
    textAlign: "left"
}

// used as a Form element as a container for inputs
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

// used as text and date inputs
const Input = styled.input`
    padding: 5px 15px;
    min-width: 200px;
    margin: -2px 5px;
    border-radius: 20px;
    border-color: #496fad;
    border-style: solid;
    border-width: 1px;
    box-shadow: 2px 2px #00000030;

    &:hover{
        background-color: #a3ad4910;
    }
`;

// used as button inputs, probably for submitting form
const BtnInput = styled.input`
    width: 120px;
    height: 30px;
    margin-top: 15px;

    background-color: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-color: #496fad;
    border-width: 2px;
    box-shadow: 3px 3px #00000030;

    &:hover{
        border-color: #ffbb00;
        cursor: pointer;
    }
`;

// contains everything
const Container = styled.div`
    margin: auto;
    margin-top: 4vh;
    padding: 5vh 0px;
    width: 70vw;
    background-color: #e0f0ff65;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

// contains the form
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;
`
// input titles
const P = styled.p`
    margin-top: 10px;
    margin-bottom: 0px;
`

export{
    P,
    H1,
    Form,
    Input,
    BtnInput,
    Container,
    FormContainer
}