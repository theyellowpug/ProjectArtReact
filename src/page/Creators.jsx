import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getAllProfiles, getProfileCards } from '../api/ProfileApi';
import LoadingIcon from '../component/multipleUse/LoadingIcon';
import { Card_FlexContainer } from '../css/CardStyledComponents';
import CreatorCard from '../component/creators/CreatorCard';

export default function Creators() {

    const NUMBER_OF_PAGES=0
    const NUMBER_OF_CARDS=10

    const [profilesData,setProfilesData]    =   useState();
    const [isLoaded,setIsLoaded]            =   useState(false);

    useEffect(() => {
        getProfileCards(NUMBER_OF_PAGES,NUMBER_OF_CARDS)
        .then(response => {
            setProfilesData(response.data);
        }).then(response2 => setIsLoaded(true))
    },[])

    return (
        isLoaded ?
        <main>
            <Card_FlexContainer>
                {profilesData.map(profile=><CreatorCard key={profile.id} profile={profile}/>)}
            </Card_FlexContainer>
        </main>
        :
        <LoadingIcon/>
    )
}
