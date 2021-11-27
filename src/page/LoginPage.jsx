import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../api/AuthenticationApi";
import { AccessTokenActionCreators } from "../state/actions/AccessTokenActions";
import {H1, LeftAlign, Form, Input, BtnInput, Container} from '../css/FormStyledComponents';


export default function RegisterPage() {

    const dispatch = useDispatch();
    const { setAccessToken, removeAccessToken} = bindActionCreators( AccessTokenActionCreators, dispatch);

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault();
        let loginData = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        } 
        console.log(loginData)
        login(loginData).then(
            response=>{
                console.log(response.data)
                setAccessToken(response.data.access_token)
                localStorage.setItem('refresh_token', response.data.refresh_token);
            }
        )
    }
    
    return(
        <Container>
            <H1>Bejelentkezés</H1>
            <Form onSubmit={submitHandler}> 
                <table>
                    <tr>
                        <th style={LeftAlign}>E-mail cím:</th> <th><Input ref={emailInputRef} type="email" name="email" id="email" placeholder="..."></Input></th>
                    </tr>
                    <tr>
                        <th style={LeftAlign}>Jelszó:</th> <th><Input ref={passwordInputRef} type="password" name="password" id="password"  placeholder="..."></Input></th>
                    </tr>
                    <tr><br></br></tr>
                </table>
                <BtnInput type="submit"></BtnInput>
            </Form>
        </Container>
    )
}