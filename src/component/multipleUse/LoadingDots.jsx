import React, {useState, useEffect} from 'react';
//import styled from 'styled-components';

function delay() {
    return new Promise(resolve => setTimeout(resolve, 700));
}

export default function LoadingDots() {

   const [dots, setDots] = useState(".");

    useEffect(() => {
        delay().then(() =>{
            switch(dots) 
            {
            case ".": setDots(".."); break;
            case "..": setDots("..."); break;
            case "...": setDots(""); break;
            case "": setDots("."); break;
            default: break;
            }}
        )
    });

    return (
        <p>
            {dots}
        </p>
    )
}
