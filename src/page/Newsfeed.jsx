import React from 'react';
import styled from 'styled-components';
import ArticleCard from '../component/newsfeed/ArticleCard';

import newsImage from '../VisualElements/newsImage.jpeg';

import '../css/pageContent.css';    //use "main" element as page container

const ARTCL = {
    img: newsImage,
    title: "Ez egy hír a hírek közül!",
    text: "Hírekre lehet szert tenni belőle. Hihetetlen! Ez pedig a cikk része a dolognak. Ezt valahogy modern online stílusban képzelem. Egy szerintem szép design: https://bleacherreport.com/articles/2519785-serena-williams-tennis-stars-discuss-body-image-in-new-york-times-interview."
}

export default function Newsfeed() {
    return (
        <main>
            <FlexContainer>
                <ArticleCard article={ARTCL}/>
            </FlexContainer>    
        </main>
    )
}

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
