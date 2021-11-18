import React from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = (props) => {

    const history=useHistory();

    const forwardToDetailsPage = (event) =>{
        event.preventDefault();
        history.push("/termekInfo/"+props.product.id)
    }

    return (
        <Container onClick={forwardToDetailsPage}>
            <LazyLoadImage src={props.product.img} style={IMG} effect="blur"></LazyLoadImage>
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
    background: radial-gradient(circle, rgba(221,226,244,1) 0%, rgba(148,186,215,1) 100%);

    border-radius: 4px;
    border: 1px solid #4d4e5080;
    box-shadow: 3px 3px #00000040;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    
    transition: all 200ms ease;
    &:hover{
        cursor: pointer;
        margin: 5px 5px;
        background: radial-gradient(circle, rgba(231,233,240,1) 0%, #bacddb 100%);
    }
`;

//left flex element
const IMG = {
    borderRadius: '6px',
    width: '7.5vw',
    height: '19vh',
    minWidth: '100px',
    minHeight: '130px'
};
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
