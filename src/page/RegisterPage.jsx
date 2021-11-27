import React, {useState} from "react";
import { useHistory } from "react-router";
import { postClient } from "../api/ClientApi";
import {H1, LeftAlign, Form, Input, BtnInput, Container} from '../css/FormStyledComponents';


export default function RegisterPage() {

    const history = useHistory()

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