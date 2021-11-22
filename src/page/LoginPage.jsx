import React, {useState,useEffect} from "react";
import {H1, LeftAlign, Form, Input, BtnInput, Container} from '../css/FormStyledComponents';

export default function RegisterPage() {

    const [userData, setUserData] = useState({email: "", forename: "", surname: "", birthDate: Date, password: ""})

    const submitHandler = e => {
        e.preventDefault();
    }
    
    return(
        <Container>
            <H1>Bejelentkezés</H1>
            <Form onSubmit={submitHandler}> 
                <table>
                    <tr>
                        <th style={LeftAlign}>E-mail cím:</th> <th><Input type="email" name="email" id="email" placeholder="..."></Input></th>
                    </tr>
                    <tr>
                        <th style={LeftAlign}>Jelszó:</th> <th><Input type="password" name="password" id="password"  placeholder="..."></Input></th>
                    </tr>
                    <tr><br></br></tr>
                </table>
                <BtnInput type="submit"></BtnInput>
            </Form>
        </Container>
    )
}