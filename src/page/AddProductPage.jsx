import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import {H1, FormContainer, Form, Input, BtnInput, Container}from "../css/FormStyledComponents";

export const AddProductPage = () => {

    const history = useHistory();

    const nameInputRef = useRef();
    const productTypeInputRef = useRef();
    const descriptionInputRef = useRef();
    const priceInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        let newProductData = {
            productType: productTypeInputRef.current.value,
            name: nameInputRef.current.value,
            price: priceInputRef.current.value,
            description: descriptionInputRef.current.value
          
        } 
        console.log(newProductData)
    }


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