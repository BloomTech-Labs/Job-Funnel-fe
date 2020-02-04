import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCamera } from "@fortawesome/free-solid-svg-icons";
import LoadingOverlay from "react-loading-overlay";
import styled from 'styled-components';

export default function ProfilePicture(props) {
    return (
        <div>
        <OuterDiv>
          <StyledLoader active={props.pictureLoading} spinner text='Uploading...'> 
              <ImageInput type='file' onChange={(e)=>{props.changeProfilePic(e.target.files[0])}} id='imageInput'/>
          </StyledLoader>
        </OuterDiv>
        <ProOuter>
            <ProfileWrapper>
                <label htmlFor='imageInput'>
                  {props.currentUser.profile_img 
                  ? ( <ProfileFilter>
                        <div className='editPicture'>
                            Edit
                            <FontAwesomeIcon icon={faCamera} className='fa-1x'/>
                        </div>
                        <ProfileImg  edit={true} style={{backgroundImage: `url('${props.currentUser.profile_img}')`}}/>
                      </ProfileFilter>) 
                  : ( <ProfileFilter>
                        <div className='editPicture'>
                            Edit
                            <FontAwesomeIcon icon={faCamera} className='fa-1x'/>
                        </div>
                        <DefaultProfile edit={true} icon={faUserCircle}/>
                      </ProfileFilter>)}
                </label>
                <SideContent>
                  {props.currentUser.profile_img && <RemoveBtn onClick={props.deleteProfilePic}>Remove Photo</RemoveBtn>}
                </SideContent>
            </ProfileWrapper>
        </ProOuter>
        </div>
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
const OuterDiv = styled.div `
    width: 100%;
    ._loading_overlay_overlay{
        background: rgba(0, 0, 0, 0.5);
        margin-top: 23px;
    }
    ._loading_overlay_content{
        background: rgba(0, 0, 0, 0.5);
        padding: 50px;
    }
`;
const ProfileFilter = styled.div `
    font-family: 'Patua One', sans-serif;
    width: 150px;
    height: 150px;
    margin-top:50px;
    display: flex;
    font-size: 3.5rem;
    align-items: center;
    justify-content: center;
    .editPicture {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const ProOuter = styled.div `
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const ProfileWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    padding: 1%;
    width: 100%;
`;
const SideContent = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
`
const DefaultProfile = styled(FontAwesomeIcon) `
    position: absolute;
    width: 150px !important;
    height: 150px;
    /* border-radius: 50%; */
    background: white;
    ${props => props.edit && `
        &:hover {
            cursor: pointer;
            opacity: 0.2;
        }
    `}
`;
const ProfileImg = styled.div`
    position: absolute;
    /* border-radius: 50%; */
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 100%;
    background-position: 50% 50%; 
    ${props => props.edit && `
        &:hover {
            cursor: pointer;
            opacity: 0.2;
        }
    ` }
`;
const RemoveBtn = styled.h3 `
    font-style:italic;
    margin-top: 0;
    margin-bottom: 0;
    cursor: pointer;
    font-size: 1.5rem;
`
// #endregion
