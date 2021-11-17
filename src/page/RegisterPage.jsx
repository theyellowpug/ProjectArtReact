import React, {useState,useEffect} from "react";
import styled from 'styled-components';

export default function RegisterPage() {

    const [userData, setUserData] = useState({email: "", forename: "", surname: "", birthDate: Date, password: ""})

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <Container>
            <h1>Regisztráció</h1>
            <Form onSubmit={submitHandler}>     
                <table>           
                <tr>
                    <th>E-mail cím:</th> <th><input type="email" name="email" id="email" placeholder="pelda@email.com"></input></th>
                </tr>
                <tr>
                    <th>E-mail újra:</th> <th><input type="email" name="emailCheck" id="emailCheck" placeholder="pelda@email.com"></input></th>
                </tr>
                <tr>
                    <th>Vezetéknév:</th> <th><input type="text" name="surname" id="surname" placeholder="Pél"></input></th>
                </tr>
                <tr>
                    <th>Utónév:</th> <th><input type="text" name="forename" id="forename" placeholder="Dani"></input></th>
                </tr>
                <tr>
                    <th>Születési dátum:</th> <th><input type="date" name="birthDate" id="birthDate"></input></th>
                </tr>
                <tr>
                    <th>Jelszó:</th> <th><input type="password" name="password" id="password"></input></th>
                </tr>
                <tr>
                    <th>Jelszó újra:</th> <th><input type="password"></input></th>
                </tr>
                </table>  
                <tr><br></br></tr>
                <input type="submit"></input>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    margin: auto;
    margin-top: 4vh;
    padding: 5vh 0px;
    width: 50vw;
    background-color: #e0f0ff65;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
