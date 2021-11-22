import React, {useState,useEffect} from "react";
import {H1, LeftAlign, Form, Input, BtnInput, Container} from '../css/FormStyledComponents';

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