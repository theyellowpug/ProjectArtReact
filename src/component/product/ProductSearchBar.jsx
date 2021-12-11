import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import {Form_row, Input, BtnInput} from '../../css/FormStyledComponents';
import TagBox from './TagBox';
import LoadingDots from "../multipleUse/LoadingDots";

import {getAllTags, getByNameStartsWith} from '../../api/TagAPI';

export default function SearchBar() {

    const [tags, setTags] = useState();
    const [isLoaded, setIsLoaded] = useState();
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        getAllTags().then(response => {
            setTags(response.data)
        }).then(response2 => setIsLoaded(true))
    });

    return (
        <Container>
            <Form_row>
                <P>Név:</P>
                <Input type="text" placeholder='Keresés terméknév alapján'></Input>
                <P>Kategória:</P>
                <input type="text" size="15" maxLength="15" placeholder='Kategória keresése'></input>
                {isLoaded ? <TagBox tags={tags}/> : <React.Fragment><P/><LoadingDots/></React.Fragment> }
            </Form_row>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fff5f5;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 5px 0px;
    border: 1px solid gray;
`;

const P = styled.p`
    margin: 0px 10px
`;
