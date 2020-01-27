import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalData from './ModalData.js';
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


// // CONNECT MODAL TO ROOT FOR FULL USAGE THROUGHOUT APPLICATION
Modal.setAppElement(document.getElementById('root'));


function ModalBase(){
    const [modalOpen, setOpen] = useState(false)
    const [activeModal, setActiveModal] = useState(0);
    const [job, setJob] = useState(''); // State for JOB PREF

    var subtitle;

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

    const nextModal = () => { // USE FOR SUBMITTING UPDATED DATA
        setActiveModal(activeModal + 1)

    }

    const skipModal = () => {
        setActiveModal(activeModal + 1)
    }

    const prevModal = () => {
           setActiveModal(activeModal - 1)
    }

    return(
        <div>
            <div>
                <button onClick={openModal}>UPDATE</button>
                <Modal isOpen={modalOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}
                style={customStyles} contentLabel="Test Modal">
                    <h2 ref={titleColor => (subtitle = titleColor)}>Make Your Profile More Professional!</h2>
                    <ModalData activeModal={activeModal} handleChange={handleChange} closeModal={closeModal}/>
                    <Button className="submit-modal-button" onClick={skipModal}>Skip</Button>
                    <Button className="submit-modal-button" onClick={nextModal}>Next</Button>
                    <Button className="submit-modal-button" onClick={prevModal}>Previous</Button>
                    <Button onClick={closeModal} className="modal-button">Close Modal</Button>
                </Modal>
            </div>
        </div>
    )
}

export default ModalBase;