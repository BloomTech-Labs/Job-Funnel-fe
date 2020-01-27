import React, { useState } from 'react';
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


function ModalJobPref(props){
    var subtitle;

    const[modalOpen, setOpen] = React.useState(false)
    const [job, setJob] = useState('')
    
    const handleChange = event => {
        setJob({...job, [event.target.name]: event.target.value})
    }
    
    
    const handleSubmit = event => {
        event.preventDefault();
        props.history.push('/dashboard')
    }

    function openModal(){
        setOpen(true);
    }

    function closeModal(){
        setOpen(false)
    }

    //Styling the modal after it's opened
    function afterOpenModal(){
        subtitle.style.color= '#f00';
    }

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
                <h3>Make Sure To Add Job Preferences</h3> 
                        <input type="text" name="job-input" value={props.job} onChange={handleChange}/>
                        <Button className="submit-modal-button">Next</Button>
                <Button onClick={closeModal} className="modal-button">Close Modal</Button>
            </Modal>
        </div>


    )

}

export default ModalJobPref;