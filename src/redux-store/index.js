import { combineReducers } from 'redux';
import { AppReducer } from './App/AppReducer';
import { ModalReducer } from "./Modals/ModalReducer.js"


export default combineReducers({
    AppReducer,
    ModalReducer,
})