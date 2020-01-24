import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';


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
    justifyContent : 'center',
    }
}

const Button = styled.button`
    margin-top: 1%;
    border: 1px, solid, blue;
    background-color: grey;
`
const Div = styled.div`
    display: 'flex',
    flex-flow: 'column', 
    align-items: 'center',
    justify-content: 'center'
`


Modal.setAppElement(document.getElementById('root'));

function ModalProfessional(){
    var subtitle;

    const[modalOpen, setOpen] = React.useState(false)

    function openModal(){
        setOpen(true);
    }

    function closeModal(){
        setOpen(false);
    }

    //Styling the modal after it's opened
    function afterOpenModal(){
        subtitle.style.color= '#f00';
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
                
                <Div>
                    <h3>Make Sure To Add Your Resume</h3> {/*OR* <h3>Make Sure To Add Your Resume</h3>*/} 
                    <form>
                        <input type="file" id="files" name="resume-input" accept="application/pdf, application/msword,.docx"/>
                        <Button className="submit-modal-button">Submit Changes</Button>
                    </form>
                </Div>
                <Button onClick={closeModal}  className="modal-button">Close Modal</Button>
            </Modal>
        </div>


    )

}

export default ModalProfessional;