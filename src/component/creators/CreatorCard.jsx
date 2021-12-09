import React from 'react';
import { useHistory } from "react-router";
import styled from 'styled-components';
import { ProfileCard as Container} from '../../css/CardStyledComponents';

export default function CreatorCard(props) {

    const history = useHistory();

    const forwardToProfile = (event) => {
        history.push("/profile/" + props.profile.id);
    }

    return (
        <Container onClick={forwardToProfile}>
           <Name>{props.profile.nickname}</Name>
           <Title>{props.profile.title}</Title>
           <Description>{props.profile.shortDescription}</Description>
        </Container>
    )
}

const Name = styled.p`

`;

const Title = styled.p`

`;

const Description = styled.p`

`;