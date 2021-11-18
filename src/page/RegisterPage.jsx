import React, {useState,useEffect} from "react";
import styled from 'styled-components';

export default function RegisterPage() {

    const [userData, setUserData] = useState({email: "", forename: "", surname: "", birthDate: Date, password: ""})

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <Container>
            <H1>Regisztráció</H1>
            <Form onSubmit={submitHandler}>     
                <table>           
                <tr>
                    <th style={LeftAlign}>E-mail cím:</th> <th><Input type="email" name="email" id="email" placeholder="pelda@email.com"></Input></th>
                </tr>
                <tr>
                    <th style={LeftAlign}>E-mail újra:</th> <th><Input type="email" name="emailCheck" id="emailCheck" placeholder="pelda@email.com"></Input></th>
                </tr>
                <tr>
                    <th style={LeftAlign}>Vezetéknév:</th> <th><Input type="text" name="surname" id="surname" placeholder="Pél"></Input></th>
                </tr>
                <tr>
                    <th style={LeftAlign}>Utónév:</th> <th><Input type="text" name="forename" id="forename" placeholder="Dani"></Input></th>
                </tr>
                <tr>
                    <th style={LeftAlign}>Születési dátum:</th> <th><Input type="date" name="birthDate" id="birthDate"></Input></th>
                </tr>
                <tr>
                    <th style={LeftAlign}>Jelszó:</th> <th><Input type="password" placeholder="..." name="password" id="password"></Input></th>
                </tr>
                <tr>
                    <th style={LeftAlign}>Jelszó újra:</th> <th><Input type="password"  placeholder="..."></Input></th>
                </tr>
                </table>  
                <tr><br></br></tr>
                <BtnInput type="submit"></BtnInput>
            </Form>
        </Container>
    )
}

const H1 = styled.h1`
    color: #496fad;
`;

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

const LeftAlign = {
    textAlign: "left"
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Input = styled.input`
    padding: 5px 15px;
    margin: 5px;
    min-width: 200px;
    border-radius: 20px;
    border-color: #496fad;
    border-style: solid;
    border-width: 1px;
    box-shadow: 2px 2px #00000030;

    &:hover{
        background-color: #a3ad4910;
    }
`;

const BtnInput = styled.input`
    width: 120px;
    height: 30px;

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
