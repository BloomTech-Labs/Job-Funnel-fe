import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import ModalProfessional from './components/modals/Modal-Profesional';

function App() {

  return (
    <div>
      <ModalProfessional/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal,
  }
}


export default connect(mapStateToProps, {})(App);


