import React from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ItemCard } from '../../css/CardStyledComponents';

const ProductCard = (props) => {

    const history=useHistory();

    const forwardToDetailsPage = (event) =>{
        event.preventDefault();
        history.push("/productDetails/"+props.product.id)
    }

    return (
        <ItemCard onClick={forwardToDetailsPage}>
            <LazyLoadImage src={props.product.img} style={IMG} effect="blur"></LazyLoadImage>
            <FlexRowContainer>
                <Name>{props.product.name}</Name>
                <Creator>Alkotó: {props.product.creator}</Creator>
                <Category>Kategória: {props.product.category}</Category>
                <Prize>Ár: {props.product.price}</Prize>
                <Likes>Kedvelések: {props.product.likes}</Likes>
            </FlexRowContainer>
        </ItemCard>
    )
}
export default ProductCard;

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
