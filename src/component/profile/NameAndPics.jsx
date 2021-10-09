import React from 'react';
import styled from 'styled-components';

import Highlights from './Highlights';

const Container = styled.div`
    display: flex;
    align-self: center;
    flex-direction: row;
    align-items: center;
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ProfilePic = styled.img`
    align-self: flex-start;
    height: 40vh;
    margin-top: 2vh;
`;

const FollowEdit = styled.div`
    background-color: #804949;
    width: 5vw;
    height: 13vh;
    margin-left: 1vw;
    align-self: flex-start;
    margin-top: 3vh;
    text-align: center;
`;

export default function NameAndPics() {
    return (
        <Container>
            <LeftSection>
                <ProfilePic src="https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg"/>
                <h2>Nikola Tesla</h2>
            </LeftSection>
            <Highlights/>
            <FollowEdit><p>Follow</p><p>Followers: 42</p></FollowEdit>
        </Container>
    )
}
