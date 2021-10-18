import React from 'react';
import styled from 'styled-components';

import MessageBox from './MessageBox';

 const Messenger = (props) => {
    return (
        <Container>
            <h1>Beszélgetés vele: /partner/</h1>
            <DialogContainer>
                {/*map messages*/}
            </DialogContainer>
            <MessageBox/>
        </Container>
    )
}
export default Messenger;

const Container = styled.div`
    width: 64%;
    height: 98%;
    margin: 0px 1px;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0 0 3px 3px #00000050;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DialogContainer = styled.div`
    height: 70%;
    width: 96%;
    background-color: #00000010;
    border-radius: 10px;
`;
