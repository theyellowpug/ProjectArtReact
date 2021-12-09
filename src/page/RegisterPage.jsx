import React, {useState} from "react";
import { useHistory } from "react-router";
import { postClient } from "../api/ClientApi";
import {H1, P, FormContainer, Form, Input, BtnInput, Container} from '../css/FormStyledComponents';


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
        history.push("/login")
    }
    
    return (
        <main>
        <Container>
            <H1>Regisztráció</H1>
            <Form onSubmit={submitHandler}>     
                <FormContainer>           
                <div>
                    <P>E-mail cím:</P> <P><Input onChange={event=>setEmail(event.target.value)} type="email" name="email" id="email" placeholder="pelda@email.com"></Input></P>
                </div>
                <div>
                    <P>E-mail újra:</P> <P><Input onChange={event=>setEmailAgain(event.target.value)} type="email" name="emailCheck" id="emailCheck" placeholder="pelda@email.com"></Input></P>
                </div>
                <div>
                    <P>Vezetéknév:</P> <P><Input onChange={event=>setSurename(event.target.value)} type="text" name="surname" id="surname" placeholder="Pél"></Input></P>
                </div>
                <div>
                    <P>Utónév:</P> <P><Input onChange={event=>setForename(event.target.value)} type="text" name="forename" id="forename" placeholder="Dani"></Input></P>
                </div>
                <div>
                    <P>Születési dátum:</P> <P><Input onChange={event=>setBirthDate(event.target.value)} type="date" name="birthDate" id="birthDate"></Input></P>
                </div>
                <div>
                    <P>Jelszó:</P> <P><Input onChange={event=>setPassword(event.target.value)} type="password" placeholder="..." name="password" id="password"></Input></P>
                </div>
                <div>
                    <P>Jelszó újra:</P> <P><Input onChange={event=>setPasswordAgain(event.target.value)} type="password"  placeholder="..."></Input></P>
                </div>
                </FormContainer>  
                <BtnInput onSubmit={submitHandler} type="submit"></BtnInput>
            </Form>
        </Container>
        </main>
    )
}