import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import {FormRow, Input} from '../../css/FormStyledComponents';
import TagBox from './TagBox';
import LoadingDots from "../multipleUse/LoadingDots";

import {getAllTags} from '../../api/TagAPI';

export default function SearchBar() {

    const [tags, setTags] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    //const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        getAllTags().then(response => {
            setTags(response.data)
        }).then(response2 => setIsLoaded(true))
    },[]);

    return (
        <Container>
            <FormRow>
                <P>Név:</P>
                <Input type="text" placeholder='Keresés terméknév alapján'></Input>
                <P>Kategória:</P>
                <input type="text" size="15" maxLength="15" placeholder='Kategória keresése'></input>
                {isLoaded ? <TagBox tags={tags}/> : <React.Fragment><P/><LoadingDots/></React.Fragment> }
            </FormRow>
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
