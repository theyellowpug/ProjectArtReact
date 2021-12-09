import React from 'react';
import styled from 'styled-components';
import '../../css/loading.css';

import Icon from '../../VisualElements/loadingIcon.png';

export default function LoadingIcon() {
    return (
        <div className='scaleIn'>
            <IMG src={Icon} className='rotate'/>
        </div>
    )
}

const IMG = styled.img`
    width: 100px;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;
