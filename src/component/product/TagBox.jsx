import React from 'react';
import styled from 'styled-components';
import TagElement from './TagElement';

const TagBox = (props) => {
    return (
        <Container>
            {props.tags.map(tag=><TagElement>henló</TagElement>)}
        </Container>
    )
}
export default TagBox;

const Container = styled.span`
    border: 1px solid gray;
    border-radius: 3px;
    width: 300px;
    height: 45px;
    margin: 0px 10px;
`;