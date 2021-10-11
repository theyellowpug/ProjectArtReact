import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function ForCreators() {

    const [isLoggedIn, LoggedIn] = useState(false);

    return(
        isLoggedIn ? 
            <p>Logged in</p> //redirect to profile/id page
        :
            <p>Not logged in</p>
    )
}
