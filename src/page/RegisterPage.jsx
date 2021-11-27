import React, {useState} from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { postClient } from "../api/ClientApi";

export default function RegisterPage() {

    const history = useHistory()

    const [userData, setUserData] = useState({email: "", forename: "", surname: "", birthDate: Date, password: ""})

    const [email,setEmail]=useState()
    const [emailAgain,setEmailAgain]=useState()
    const [surname,setSurename]=useState()
    const [forename,setForename]=useState()
    const [birthDate,setBirthDate]=useState()
    const [password,setPassword]=useState()
    const [passwordAgain,setPasswordAgain]=useState()


    const submitHandler = e => {
        e.preventDefault();
        let registrationData = {
            email : email,
            emailAgain : emailAgain,
            surname : surname,
            forename : forename,
            birthDate : birthDate,
            password : password,
            passwordAgain : passwordAgain

        }
        console.log(registrationData)
        postClient(registrationData)
        history.push("/")
    }

    return (
        <Container>
            <H1>Regisztráció</H1>
            <Form onSubmit={submitHandler}>     
                <table>           
                <tr>
                    <td style={LeftAlign}>E-mail cím:</td> <td><Input onChange={event=>setEmail(event.target.value)} type="email" name="email" id="email" placeholder="pelda@email.com"></Input></td>
                </tr>
                <tr>
                    <td style={LeftAlign}>E-mail újra:</td> <td><Input onChange={event=>setEmailAgain(event.target.value)} type="email" name="emailCheck" id="emailCheck" placeholder="pelda@email.com"></Input></td>
                </tr>
                <tr>
                    <td style={LeftAlign}>Vezetéknév:</td> <td><Input onChange={event=>setSurename(event.target.value)} type="text" name="surname" id="surname" placeholder="Pél"></Input></td>
                </tr>
                <tr>
                    <td style={LeftAlign}>Utónév:</td> <td><Input onChange={event=>setForename(event.target.value)} type="text" name="forename" id="forename" placeholder="Dani"></Input></td>
                </tr>
                <tr>
                    <td style={LeftAlign}>Születési dátum:</td> <td><Input onChange={event=>setBirthDate(event.target.value)} type="date" name="birthDate" id="birthDate"></Input></td>
                </tr>
                <tr>
                    <td style={LeftAlign}>Jelszó:</td> <td><Input onChange={event=>setPassword(event.target.value)} type="password" placeholder="..." name="password" id="password"></Input></td>
                </tr>
                <tr>
                    <td style={LeftAlign}>Jelszó újra:</td> <td><Input onChange={event=>setPasswordAgain(event.target.value)} type="password"  placeholder="..."></Input></td>
                </tr>
                </table>  
                <tr><br></br></tr>
                <BtnInput onSubmit={submitHandler} type="submit"></BtnInput>
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
