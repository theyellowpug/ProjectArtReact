import React, {useEffect, useState} from 'react';
import { getProfileCards } from '../api/ProfileApi';
import LoadingIcon from '../component/multipleUse/LoadingIcon';
import { CardFlexContainer } from '../css/CardStyledComponents';
import CreatorCard from '../component/creators/CreatorCard';

export default function CreatorsPage() {

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
            <CardFlexContainer>
                {profilesData.map(profile=><CreatorCard key={profile.id} profile={profile}/>)}
            </CardFlexContainer>
        </main>
        :
        <LoadingIcon/>
    )
}
