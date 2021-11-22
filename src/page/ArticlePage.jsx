import React, {useState,useEffect} from "react";
import styled from 'styled-components';

import Comments from '../component/multipleUse/Comments';
import LoadingIcon from "../component/multipleUse/LoadingIcon";

const ArticlePage = (props) => {

    const [commentData, setCommentData] = useState();
    const [isCommentsLoaded, setCommentsLoaded] = useState(false);
    const [articleData, setArticleData] = useState();
    const [isLoaded , setIsLoaded] = useState(false);

    return (
        <Container>
            
        </Container>
    )
}
export default ArticlePage;

const Container = styled.div`
    width: 90%;
    min-height: 80vh;
    margin: auto;
    margin-top: 4vh;
    background-color: #e0f0ff65;
    box-shadow: 2px 2px #00000020;
    border-radius: 4px;
`;  

