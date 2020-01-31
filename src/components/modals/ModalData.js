import React from 'react'
import { connect } from 'react-redux';

function ModalData(props) {
    const user = props.currentUser

    return (
        <>
          {(()=>{
            if (props.activeModal === 0){
                return ( 
                    <>
                        <h2>Artifacts</h2>
                        <h3>Make Sure To Add Your Artifacts</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <h4>Github</h4>
                        <input type="url" id="urls" name="github-input"/>
                        <h4>Portfolio</h4>
                        <input type="url" id="urls" name="portfolio-input"/>
                    </>
            )}
            if (props.activeModal === 1){
                return ( 
                    <>
                        <h2>Job Preferences</h2>
                        <h3>Make Sure To Add Job Preferences</h3> 
                        <input type="text" name="job-input" value={props.job} onChange={props.handleChange}/>
                    </>
            )}
            if (props.activeModal === 2){
                return ( 
                    <>
                        <h2>Professional</h2>
                        {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                        <h3>Make Sure To Add Your Resume</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <input type="file" id="files" name="resume-input" accept="application/pdf, application/msword,.docx"/>
                    </>
            )}
            if (props.activeModal === 3){
                return ( 
                    <>
                        <h2>Update Profile</h2>
                        {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                        <h3>Make Sure To Add Your Photo</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <input type="file" id="files" name="add-photo" accept="application/jpeg"/>
                    </>
            )}
            if (props.activeModal === 4){
                return ( 
                    <>
                        <h2>Skills</h2>
                        {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                        <h3>Make Sure To Add Your Skills</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <input type="file" id="files" name="add-photo" accept="application/jpeg"/>
                    </>
            )}
            if (props.activeModal > 4){
                return ( 
                    <h2>Update Complete</h2>
            )}
            if (props.activeModal < 0){
                return ( 
                    <h2>Click Next To Improve Profile</h2>
            )}
          })()}  
        </>
    )
}

const mapStateToProps = state => {
    console.log('mapstatetoprops: ', state);
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }

export default connect(mapStateToProps, {})(ModalData)
