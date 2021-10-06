import React from 'react';
import styled from 'styled-components';

import Comments from '../component/Comments';
import ItemContainer from '../component/profile/ItemContainer';
import Highlights from '../component/profile/Highlights';

import '../css/pageContent.css';    //use "main" element as page container

const creator = {
    image: "data:image/jpeg;base64,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",
    description: "Eladó vagyok a lidl-ben.",
    name: "John Doe",
}

export const Profile = (props) => {


    return (
        <main>
        <FlexContainer>
            <NameAndPics>
                <ProfileIMG src={creator.image}></ProfileIMG>
                <ProfileName>Chad Doe</ProfileName>
                <Highlights/>
                <Follow_Edit>Beágyazott komponens: follow és followers</Follow_Edit>
            </NameAndPics>
            <Description>
                <p>
                    A leírás jön ide bizony.
                </p>
            </Description>
            <ProductsAndServices>
                <ItemContainer/>
                <ItemContainer/>
            </ProductsAndServices>
            <CommentsContainer>
                <Comments/>
            </CommentsContainer>
        </FlexContainer>
        </main>
    )
}

// flex elements

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
`;

const NameAndPics =  styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    order: 0;
    background-color: blue;
`;
    const ProfileIMG = styled.img`
        order: 0;
    `;
    const ProfileName = styled.p`
        order: 1;
        align-self: flex-start;
    `;
    const Follow_Edit = styled.div`
        order: 2;
    `;

const Description = styled.div`
    order: 1;
    background-color: red;
`;

const ProductsAndServices = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    order: 2;
    background-color: yellow;
`;

const CommentsContainer = styled.div`
    order: 3;
    background-color: green;
`;


