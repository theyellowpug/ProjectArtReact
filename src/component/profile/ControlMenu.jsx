import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
//import icons for buttons
import addProduct from '../../VisualElements/addProduct.png';
import edit from '../../VisualElements/edit.png';
import orders from '../../VisualElements/orders.png';
import transactions from '../../VisualElements/transaction.png';

const ControlMenu = () => {

    const history = useHistory();
    const redirect = (to) => {
        history.push("/" + to);
    } 

  return (
    <Container>
        <ControlIcon src={addProduct}   onClick={() => redirect("upload")}/>
        <ControlIcon src={edit}         onClick={() => redirect("edit")}/>
        <ControlIcon src={orders}       onClick={() => redirect("orders")}/>
        <ControlIcon src={transactions} onClick={() => redirect("transactions")}/>
    </Container>
  )
}
export default ControlMenu;

const Container = styled.div`
    width: 95vw;
    height: 8vh;
    min-height: 80px;
    border-radius: 10px;
    background-color: #cdcada50;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 3%;
`;

const ControlIcon = styled.img`
    min-height: 70%;
    max-height: 80%;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`;