import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { openModal } from './redux-store/actions';

function App(props) {
    console.log(props)
  useEffect(() => {
    props.openModal()
  })

  return (
    <div>
      <button onClick={props.openModal}>Change</button>
      {console.log("This works", props.openModal)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal,
  }
}


export default connect(mapStateToProps, { openModal })(App);


