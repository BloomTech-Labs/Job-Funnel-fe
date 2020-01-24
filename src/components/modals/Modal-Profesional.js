import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalProfile from './Modal-Profile';



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


function ModalProfessional(){
    var subtitle;

    const[modalOpen, setOpen] = React.useState(false)

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

    const nextModal = () => {

    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Test Modal"
            >
                <h2 ref={titleColor => (subtitle = titleColor)}>Make Your Profile More Professional!</h2>
                {/* MAKE SURE TO ADD IF/ELSE STATEMENT FOR RESUME/EDUCATION*/}
                <h3>Make Sure To Add Your Resume</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                <Div>
                    <form>
                        <input type="file" id="files" name="resume-input" accept="application/pdf, application/msword,.docx"/>
                        <Button className="submit-modal-button" onClick={nextModal}>Next</Button>
                    </form>
                </Div>
                <Button onClick={closeModal} className="modal-button">Close Modal</Button>
            </Modal>
        </div>


    )

}

export default ModalProfessional;