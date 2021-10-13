import React from 'react';
import styled from 'styled-components';
import ArticleCard from '../component/newsfeed/ArticleCard';

import '../css/pageContent.css';    //use "main" element as page container

export default function Newsfeed() {
    return (
        <main>
            <FlexContainer>
                <ArticleCard/>
            </FlexContainer>    
        </main>
    )
}

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
