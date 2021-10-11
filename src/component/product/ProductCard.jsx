import React from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';

const ProductCard = (props) => {

    const history=useHistory();

    const forwardToDetailsPage = (event) =>{
        event.preventDefault();
        history.push("/termekInfo/"+props.product.id)
    }

    return (
        <Container onClick={forwardToDetailsPage}>
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
export default ProductCard;

const Container = styled.div`
    margin: 3px 3px;
    padding: 0.42vh 0.6vw;
    padding-left: 0.4vw;
    width: 18vw;
    height: 21vh;
    min-width: 250px;
    min-height: 150px;
    background-color: #9ea8b480;
    border-radius: 4px;
    //box-shadow: 5px 5px 5 1 #83878b80;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    
    transition: all 200ms ease;
    &:hover{
        background-color: #d1dfed;
        cursor: pointer;
        height: 22vh;
    }
`;

//left flex element
const IMG = styled.img`
    border-radius: 6px;
    width: 7.5vw;
    height: 19vh;
    min-width: 100px;
    min-height: 130px;
`;
//right flex element
const FlexRowContainer = styled.div`
    width: 9.5vw;
    height: 20vh;
    min-width: 100px;
    min-height: 130px;
    padding-left: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: baseline;
`;

const Name = styled.div`
    font-size: 22px;
    font-weight: 600;
`;

const Creator = styled.div`
    margin-top: -0.5vw;
    font-size: 15px;
    color: #63593d;
`;

const Category = styled.div`
    font-size: 12px;
`;

const Prize = styled.div`
    font-size: 20px;
    align-self: flex-end;
`;

const Likes = styled.div`
    font-size: 15px;
    align-self: flex-end;
`;
