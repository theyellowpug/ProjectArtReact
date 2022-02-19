import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useSelector } from "react-redux";  //redux import
import { useHistory } from 'react-router';

import {setProfilePic} from '../api/ProfileApi';
import defaultProfilePic from '../VisualElements/defaultProfilePic.png';

export default function ProfileEditPage() {
    
    // import image convert tool
    const Jimp = require("jimp");
    //import global state redux
    const state = useSelector((state) => state); 
    // import browse history
    const history = useHistory();

    const [profilePicData, setProfilePicData] = useState(null);
    const [profPicPreview, setProfPicPreview] = useState(defaultProfilePic);

    // for react-dropzone
    const maxImageSize = 3000000; // in bytes! now 3MB

    // used when profilePic upload button is pressed 
    const submitHandler = () => {
        if(profilePicData != null)
        {
            // creating a form data object    
            const formData = new FormData(); 
            // adding params
            formData.append("file", profilePicData);
            formData.append("id", (state.userId) /*(global state)*/)
            console.log(formData);
            setProfilePic(formData).then(response =>{
            // redirecting
            history.push("/profile/" + state.userId);
            NotificationManager.success('Yéy! A profilkép cseréje sikeres volt!');
            });
        } else {
            NotificationManager.warning('Nem töltöttél fel képet.');
        }
    } 

    return (
            <FlexRow>
                <FlexColumn>
                    <Dropzone 
                        // Runs when file is uploaded (whether it is dropped or not)
                        onDrop={(acceptedFiles, rejectedFiles) => {
                            if(acceptedFiles.length > 0){
                                setProfilePicData(acceptedFiles[0]);
                                setProfPicPreview(URL.createObjectURL(acceptedFiles[0]));
                            } else {
                                // Handling error and notifying user 
                                console.log(rejectedFiles[0].errors[0].code);
                                switch(rejectedFiles[0].errors[0].code){
                                    case 'file-too-large':      NotificationManager.error('A kép mérete nagyobb mint 3MB!');
                                        break;
                                    case 'too-many-files':      NotificationManager.error('Egyszerre csak egy kép tölthető fel!');
                                        break;
                                    case 'file-invalid-type':   NotificationManager.error('Nem megfelelő fájlformátum!\nElfogadott: .jpg & .png');
                                        break;
                                    default:                    NotificationManager.error('A kép feltöltése nem sikerült.');
                                }
                            }
                    }}
                    //
                    maxSize={maxImageSize}
                    multiple={false}
                    accept={['image/jpeg','image/png']}
                    >
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
                </FlexColumn>
                <FlexColumn>
                    <Preview src={profPicPreview}/>
                    <p>Így fog kinézni az új profilképed!</p>
                </FlexColumn>
            </FlexRow>
    )
}

// ---  Styled divs ---

const DropzoneStyle = styled.div`
    margin-top: 20px;
    width: 300px;
    height: 100px;
    border: 1px dashed black;
    border-radius: 10px;
    text-align: center;
    color: blue;
    &:hover{
        cursor: pointer;
    }
`;

const ButtonVariant= styled.button`
    margin: 5px;
    margin-left: 25%;
    width: 150px;
    height: 25px;
    text-align: center;
    &:hover{
        cursor: pointer;
    }
`;

const FlexRow = styled.div`
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Preview = styled.img`
    margin-left: 50px;
    max-width: 300px;
    max-height: 300px;
`;