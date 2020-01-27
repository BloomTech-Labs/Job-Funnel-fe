import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';



// Complete Style for Modal
const customStyles = {
    content : {
    top        : '25%',
    left       : '50%',
    right      : 'auto',
    bottom     : 'auto',
    marginRight: '-50%',
    transform  : 'translate(-50%, -50%)',
    display    : 'flex',
    flexFlow   : 'column', 
    alignItems : 'center',
    alignContent : 'center',
    justifyContent : 'center',
    }
}


// STYLED COMPONENTS START 
const Button = styled.button`
    margin-top: 1%;
    border: 1px, solid, blue;
    background-color: grey;
`
const Div = styled.div`
    display: 'flex',
    flex-flow: 'column, wrap', 
    align-items: 'center',
    align-content: 'center',
    justify-content: 'center',
    border: 1px, solid, black
`
// STYLED COMPONENTS END 


// CONNECT MODAL TO ROOT FOR FULL USAGE THROUGHOUT APPLICATION
Modal.setAppElement(document.getElementById('root'));


function ModalBase(){
    var subtitle;

    
    const[modalOpen, setOpen] = useState(false)
    const[activeModal, setActiveModal] = useState(0);

    // State for JOB PREF
    const [job, setJob] = useState('');
    // Function for JOB PREF 
    const handleChange = event => {
        setJob({...job, [event.target.name]: event.target.value})
    }

    function openModal(){
        setOpen(true);
        console.log(activeModal)
    }

    function closeModal(){
        setOpen(false)
    }

    //Styling the modal after it's open
    function afterOpenModal(){
        subtitle.style.color= '#f00';
    }

    const nextModal = () => {
        setActiveModal(activeModal + 1)
        // import into a put request and use as a submit. 
        // use this for updating data. 
    }

    const skipModal = () => {
        setActiveModal(activeModal + 1)

    }

    const prevModal = () => {
           setActiveModal(activeModal - 1)
    }



    if(activeModal === 0){
        return (
            <div>
                {console.log('This is artifacts', activeModal)}
                <button onClick={openModal}>Artifacts</button>
                <Modal
                    isOpen={modalOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Test Modal"
                >
                    <h2 ref={titleColor => (subtitle = titleColor)}>Make Your Profile More Professional!</h2>
                    <h2>Artifacts</h2>
                    {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                    <h3>Make Sure To Add Your Artifacts</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <h4>Github</h4>
                        <input type="url" id="urls" name="github-input"/>
                        <h4>Portfolio</h4>
                        <input type="url" id="urls" name="portfolio-input"/>
                    <Button className="submit-modal-button" onClick={nextModal}>Next</Button>
                    <Button className="submit-modal-button" onClick={nextModal}>Skip</Button>
                    <Button onClick={closeModal} className="modal-button">Close Modal</Button>
                </Modal>
            </div>
        )}
    if(activeModal === 1){
        return (
            <div>
            <button onClick={openModal}>Job Preferences</button>
            <Modal
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Test Modal"
            >
                <h2 ref={titleColor => (subtitle = titleColor)}>Make Your Profile More Professional!</h2>
                <h2>Job Preferences</h2>
                <h3>Make Sure To Add Job Preferences</h3> 
                        <input type="text" name="job-input" value={job} onChange={handleChange}/>
                <Button className="submit-modal-button" onClick={nextModal}>Skip</Button>
                <Button className="submit-modal-button" onClick={nextModal}>Next</Button>
                <Button className="submit-modal-button" onClick={prevModal}>Previous</Button>
                <Button onClick={closeModal} className="modal-button">Close Modal</Button>
            </Modal>
        </div>
        )}
    if(activeModal === 2){
        return (
        <div>
            <button onClick={openModal}>Professional</button>
            <Modal
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Test Modal"
            >
                <h2 ref={titleColor => (subtitle = titleColor)}>Make Your Profile More Professional!</h2>
                <h2>Professional</h2>
                {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                <h3>Make Sure To Add Your Resume</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <input type="file" id="files" name="resume-input" accept="application/pdf, application/msword,.docx"/>
                <Button className="submit-modal-button" onClick={nextModal}>Skip</Button>
                <Button className="submit-modal-button" onClick={nextModal}>Next</Button>
                <Button className="submit-modal-button" onClick={prevModal}>Previous</Button>
                <Button onClick={closeModal} className="modal-button">Close Modal</Button>
            </Modal>
        </div>
        )}
    if(activeModal === 3){ 
        return (
            <div>
            <button onClick={openModal}>Update Profile</button>
            <Modal
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Test Modal"
            >
                <h2 ref={titleColor => (subtitle = titleColor)}>Make Your Profile More Professional!</h2>
                <h2>Update Profile</h2>
                {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                <h3>Make Sure To Add Your Photo</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <input type="file" id="files" name="add-photo" accept="application/jpeg"/>
                <Button className="submit-modal-button" onClick={nextModal}>Skip</Button>
                <Button className="submit-modal-button" onClick={nextModal}>Next</Button>
                <Button className="submit-modal-button" onClick={prevModal}>Previous</Button>
                <Button onClick={closeModal} className="modal-button">Close Modal</Button>
            </Modal>
        </div>
        )}
    if(activeModal === 4){
        return (
            <div>
            <button onClick={openModal}>Skills</button>
            <Modal
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Test Modal"
            >
                <h2 ref={titleColor => (subtitle = titleColor)}>Make Your Profile More Professional!</h2>
                <h2>Skills</h2>
                {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                <h3>Make Sure To Add Your Skills</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                        <input type="file" id="files" name="add-photo" accept="application/jpeg"/>
                <Button className="submit-modal-button" onClick={nextModal}>Skip</Button>
                <Button className="submit-modal-button" onClick={nextModal}>Next</Button>
                <Button className="submit-modal-button" onClick={prevModal}>Previous</Button>
                <Button onClick={closeModal} className="modal-button">Close Modal</Button>
            </Modal>
        </div>
        )}
    if(activeModal > 4){
        return(
            <div>
                <h3>"Return to Profile"</h3>
            </div>
        )
    }
}

export default ModalBase;