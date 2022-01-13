import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components';
import { useSelector } from "react-redux";  //redux import

import {setProfilePic} from '../api/ProfileApi';
import { BtnInput } from '../css/FormStyledComponents';

export default function ProfileEditPage() {
    
    //import global state redux
    const state = useSelector((state) => state);

    const [profilePicData, setProfilePicData] = useState();
    const [profPicPreview, setProfPicPreview] = useState();

    // used when profilePic upload button is pressed 
    const submitHandler = () => {
        // generating a form data object
        
        const formData = new FormData(); 
        //formData.append("file", new Blob([profilePicData], {type: 'multipart/form-data'}));
        formData.append("file", profilePicData);
        formData.append("id", (state.userId) /*(global state)*/);     //!! CLIENT ID == PROFILE ID++ !!
        console.log("UPLOADING PROFILE PIC: " + setProfilePic(formData));
    } 

    return (
        <CenteredDiv>
            <Dropzone 
                // Runs when file is uploaded (whether it is dropped or not)
                onDrop={acceptedFiles => {
                    setProfilePicData(acceptedFiles[0]);
                    /*  -- only way to get the file into form data  --
                    
                    var file = acceptedFiles[0],
                        reader = new FileReader();            
                    setProfilePicData(reader.readAsArrayBuffer(file));
                    */ //  --  --  --  --  --  --  --  --  --  --  --  --
                    setProfPicPreview(URL.createObjectURL(acceptedFiles[0]));
                //
            }
            }>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <DropzoneStyle {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Húzd ide a képet vagy klikkelj ide a feltöléshez!</p>
                        </DropzoneStyle>
                    </section>
                )}
            </Dropzone>
            <ButtonVariant onClick={submitHandler}>Profilkép cseréje</ButtonVariant>
        </CenteredDiv>
    )
}

// ---  Styled divs ---

const DropzoneStyle = styled.div`
    margin-top: 20px;
    width: 300px;
    height: 100px;
    border: 1px dashed black;
    border-radius: 10px;
`;

const CenteredDiv = styled.div`
    margin: auto;
    width: 300px;
    text-align: center;
`;

const ButtonVariant= styled.button`
    margin: 5px;
    width: 100px;
    height: 25px;
    text-align: center;
`;
//      ---     ---     ---