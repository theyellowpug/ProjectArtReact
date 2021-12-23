import React, {useState} from 'react';

export default function ForCreators() {

    const [isLoggedIn, /*setLoggedIn*/] = useState(false);

    return(
        isLoggedIn ? 
            <p>Logged in</p> //redirect to profile/id page
        :
            <p>Not logged in</p>
    )
}
