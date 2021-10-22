import React, {useState,useEffect} from "react";
import styled from 'styled-components';

import CommentCard from "./CommentCard";

const Comments = (props) => {
    return (
        <Container>
            {props.data.map(comment=><CommentCard key={comment.id} comment={comment}/>)}
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
