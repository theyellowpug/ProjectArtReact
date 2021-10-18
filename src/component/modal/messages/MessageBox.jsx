import React from 'react';
import styled from 'styled-components';

const MessageBox = (props) => {
    return (
        <Form>
            <InputField placeholder="Ide írhatod az üzeneted..." cols='50' rows='4'/>
            <SendButton onClick src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/512px-Circle-icons-mail.svg.png"/>
        </Form>
    )
}
export default MessageBox;

const Form = styled.div`
    height: 14%;
    width: 96%;
    margin-top: 10px;
    border-radius: 3px;

    background-color: #00000037;
    display: flex;
`;

const InputField = styled.textarea`
    margin: 1% 1%;
    resize: none;
`;

const SendButton = styled.img`
    width: 11%;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: center;
    border-radius: 50px;

    &:hover{
        box-shadow: 0px 0px 2px 2px blue;
        cursor: pointer;
    }
`;
