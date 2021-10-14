import React from 'react';
import styled from 'styled-components';
import ArticleCard from '../component/newsfeed/ArticleCard';

import '../css/pageContent.css';    //use "main" element as page container

const ARTCL = {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OOjs_UI_icon_article-ltr-progressive.svg/1024px-OOjs_UI_icon_article-ltr-progressive.svg.png",
    title: "Újabb gyurcsány szál",
    text: "Soros György meleg néger gyermeke 4(négy)[IV] millió migránst költöztetne Zuglóba. Ugyanitt: Karácsony Gergely csöcsei olyanok mint a tacskó füle."
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
