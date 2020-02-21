import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCamera } from "@fortawesome/free-solid-svg-icons";
import LoadingOverlay from "react-loading-overlay";
import styled from 'styled-components';

//Cloudinary Stuff - allows users to add profile pictures to their profiles
export default function ProfilePicture(props) {
    return (
        <div>
            <ImageInput type='file' onChange={(e)=>{props.changeProfilePic(e.target.files[0])}} id='imageInput'/>
            <StyledLoader active={props.pictureLoading} spinner text='Uploading...'> 
                <label htmlFor='imageInput'>
                    <ProfileFilter>
                        <div className='editPicture'>
                            Edit
                            <FontAwesomeIcon icon={faCamera} className='fa-1x'/>
                        </div>
                        {props.currentUser.profile_img 
                            ? ( <ProfileImg style={{backgroundImage: `url('${props.currentUser.profile_img}')`}}/> ) 
                            : ( <DefaultProfile icon={faUserCircle}/> )}
                    </ProfileFilter>
                </label>
            </StyledLoader>
            <SideContent>
                {props.currentUser.profile_img && <RemoveBtn onClick={props.deleteProfilePic}>Remove Photo</RemoveBtn>}
            </SideContent>
        </div >
    )
}

// #region Styled components
const StyledLoader = styled(LoadingOverlay)`
    width:100%;
    z-index: 2;
`;
const ImageInput = styled.input `
    opacity: 0;
    position: absolute;
    pointer-events: none;
    width: 1px;
    height: 1px;
`;
const ProfileFilter = styled.div `
    font-family: 'Patua One', sans-serif;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    .editPicture {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
    }
`;
const SideContent = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
`;
const DefaultProfile = styled(FontAwesomeIcon) `
    position: absolute;
    width: 150px !important;
    height: 150px;
    background: white;

    &:hover {
        cursor: pointer;
        opacity: 0.2;
    }
`;
const ProfileImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &:hover {
        cursor: pointer;
        opacity: 0.2;
    }
`;
const RemoveBtn = styled.h3 `
    font-style: italic;
    margin-top: 0;
    margin-bottom: 0;
    cursor: pointer;
    font-size: 1.5rem;
`;
// #endregion
