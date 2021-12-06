import React, { useRef } from "react";
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../api/AuthenticationApi";
import { AccessTokenActionCreators } from "../state/actions/AccessTokenActions";
import {H1, FormContainer, P, Form, Input, BtnInput, Container} from '../css/FormStyledComponents';


export default function RegisterPage() {

    const history = useHistory();

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
                history.goBack();  //redirects to previous page after succesful login
            }
        )
    }
    
    return(
        <Container>
            <H1>Bejelentkezés</H1>
            <Form onSubmit={submitHandler}> 
                <FormContainer>
                    <div>
                        <P>E-mail cím:</P> <P><Input ref={emailInputRef} type="email" name="email" id="email" placeholder="..."></Input></P>
                    </div>
                    <div>
                        <P>Jelszó:</P> <P><Input ref={passwordInputRef} type="password" name="password" id="password"  placeholder="..."></Input></P>
                    </div>
                </FormContainer>
                <BtnInput type="submit"></BtnInput>
            </Form>
        </Container>
    )
}