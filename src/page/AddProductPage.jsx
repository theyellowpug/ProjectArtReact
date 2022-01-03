import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getClientIdByEmail } from "../api/ClientApi";
import { postProduct } from "../api/ProductApi";
import {H1, FormContainer, Form, Input, BtnInput, Container}from "../css/FormStyledComponents";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";


export const AddProductPage = () => {

    const history = useHistory();

    const state = useSelector((state) => state);

    const nameInputRef = useRef();
    const productTypeInputRef = useRef();
    const descriptionInputRef = useRef();
    const priceInputRef = useRef();

    const [currentClientId,setCurrentClientId] = useState("");

    const decodeJWtToken = () => {
        state.accessToken!=="" ? 
            getClientIdByEmail(jwt_decode(state.accessToken).sub).then(respone=>setCurrentClientId(respone.data)) : setCurrentClientId("")
    }

    const submitHandler = event => {
        event.preventDefault();
        let newProductData = {
            productType: productTypeInputRef.current.value,
            name: nameInputRef.current.value,
            price: priceInputRef.current.value,
            description: descriptionInputRef.current.value
          
        } 
        console.log(newProductData)
        console.log(currentClientId)
        postProduct(currentClientId,newProductData)
    }

    useEffect(()=>{
        decodeJWtToken()
    },[state])


    return(
    <>
        <Container>
            <H1>Termék/Szolgáltatás hozzáadása</H1>
            <Form onSubmit={submitHandler}>
                <FormContainer>
                    <label>Név</label><Input ref={nameInputRef} type="Text"></Input>
                    <label>Típus</label>
                    <select ref={productTypeInputRef}>
                        <option value="ITEM">Termék</option>
                        <option value="SERVICE">Szolgáltatás</option>
                    </select>
                    <label>Leírás</label><textarea ref={descriptionInputRef}></textarea>
                    <label>Ár</label><Input ref={priceInputRef} type="Number"></Input>
                </FormContainer>
                <BtnInput type="Submit"></BtnInput>
            </Form>
        </Container>
    </>
    )
}