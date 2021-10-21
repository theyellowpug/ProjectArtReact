import React from 'react';
import styled from 'styled-components';
import HighlightItem from './HighlightItem';

// DUMMY
const DummyHighlight1 = {
    video: 'false',
    url: 'https://vjm.hu/wp-content/uploads/2016/09/citadella.jpg'
}
const DummyHighlight3 = {
    video: 'false',
    url: 'https://banana-soft.com/sites/default/files/458%20Scala.jpg'
}
const DummyHighlight2 = {
    video: 'true',
    url: 'https://vimeo.com/133548524'
}
const DummyHighlight4 = {
    video: 'false',
    url: 'https://kidsoasis.hu/fileadmin/user_upload/219440917_404863330968242_3211706828030647667_n.jpg'
}
const DummyHighlight5 = {
    video: 'false',
    url: 'https://storage.googleapis.com/welove-media/be/szentbekkallai-kotenger-20160804-kt-1.exact1980w.jpg'
}
// ---

export default function Highlights() {
    return (
        <Container>
            <ItemList>
                <HighlightItem data={DummyHighlight2}/>
                <HighlightItem data={DummyHighlight1}/>
                <HighlightItem data={DummyHighlight3}/>
                <HighlightItem data={DummyHighlight4}/>
                <HighlightItem data={DummyHighlight5}/>
            </ItemList>
        </Container>
    )
}

const Container = styled.span`
    max-width: 50vw;
    margin-left: 1vw;
    padding-bottom: 5px;
    background-color: #00000010;
`;

const ItemList = styled.span`
    padding: 0px 0px;
    display: flex;
    flex-wrap: wrap;
`;