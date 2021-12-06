import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getAllProfiles } from '../api/ProfileApi';
import LoadingIcon from '../component/multipleUse/LoadingIcon';

export default function Creators() {

    const [profilesData,setProfilesData]    =   useState();
    const [isLoaded,setIsLoaded]            =   useState(false);

    useEffect(() => {
        getAllProfiles()
        .then(response => {
            setProfilesData(response.data);
            console.log(profilesData);
        }).then(response2 => setIsLoaded(true))
    },[])

    return (
        isLoaded ?
        <main>

        </main>
        :
        <LoadingIcon/>
    )
}
