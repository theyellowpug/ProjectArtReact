//import React, {useState,useEffect} from "react";
import styled from 'styled-components';

import CommentCard from "./CommentCard";

const Comments = (props) => {
    return (
        <Container>
            <Title>Kommentek</Title>
            {props.data.length != 0 
                ? 
                    props.data.map(comment=><CommentCard key={comment.id} commentData={comment}/>)
                :
                    <NoComment>Hmm. Itt nincsenek kommentek.</NoComment>
            }
        </Container>
    )
}
export default Comments;

const Container = styled.div`
    width: 70vw;
    align-self: center;
    min-height: 20vw;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    text-align: center;
`;

const NoComment = styled.p`
    color: gray;
`;
