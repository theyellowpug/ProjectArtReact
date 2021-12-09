import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getAllProfiles } from '../api/ProfileApi';
import LoadingIcon from '../component/multipleUse/LoadingIcon';
import { Card_FlexContainer } from '../css/CardStyledComponents';
import CreatorCard from '../component/creators/CreatorCard';

export default function Creators() {

    const [profilesData,setProfilesData]    =   useState();
    const [isLoaded,setIsLoaded]            =   useState(false);

    useEffect(() => {
        getAllProfiles()
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
