import React from 'react';
import styled from 'styled-components';

export default function ProductCard(props) {

    function Clicked() {
        console.log('Product clicked!');
    }

    return (
        <Container onClick={Clicked}>
            <IMG src={props.product.img}></IMG>
            <FlexRowContainer>
                <Name>{props.product.name}</Name>
                <Creator>Alkotó: {props.product.creator}</Creator>
                <Category>Kategória: {props.product.category}</Category>
                <Prize>Ár: {props.product.price}</Prize>
                <Likes>Kedvelések: {props.product.likes}</Likes>
            </FlexRowContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 3px 3px;
    padding: 5px 12px;
    width: 300px;
    height: 200px;
    background-color: #9ea8b480;
    border-radius: 4px;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    transition: all 300ms ease;
    &:hover{
        background-color: #d1dfed;
        cursor: pointer;
    }
`;

//left flex element
const IMG = styled.img`
    border-radius: 10px;
    width: 150px;
    height: 180px;
`;
//right flex element
const FlexRowContainer = styled.div`
    width: 200px;
    height: 200px;
    padding-left: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: baseline;
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

const Creator = styled.div`
    font-size: 15px;
`;

const Category = styled.div`
    font-size: 13px;
`;

const Prize = styled.div`
    font-size: 20px;
    align-self: flex-end;
`;

const Likes = styled.div`
    font-size: 14px;
    align-self: flex-end;
`;
