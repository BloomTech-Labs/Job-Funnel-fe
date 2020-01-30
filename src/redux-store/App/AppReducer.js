import { SET_CURRENT_USER, LOGIN_FAILED, LOGOUT, SET_OTHER_USER, 
    WIPE_OTHER_USER, } from './AppActions.js';

const initialState = {
    currentUser: '',
    otherUser: '',
    loading: true,
    loginFailed: false,
    imageFileTypes:".ai, .bmp, .jpeg, .jpg, .gif, .pdf, .png, .psd, .svg, .tga, .tiff,",
    videoFileTypes: ".3gp, .avi, .ogv, .mkv, .mov, .mpeg, .mp4, .wmv",
  };


export const AppReducer = (state = initialState, action) => {
    // console.log('AppReducer initialState: ', initialState);
    // console.log('AppReducer firing: ', action);
    switch(action.type) {
        case SET_CURRENT_USER:
            // console.log('SET_CURRENT_USER FIRING', state, action.payload);
            return {
                ...state,
                currentUser: {...state.currentUser, ...action.payload},
                loginFailed: false,
            };
        case SET_OTHER_USER:
            // console.log('SET_OTHER_USER FIRING', state, action.payload);
            return {
                ...state,
                otherUser: {...state.otherUser, ...action.payload},
            };
        case WIPE_OTHER_USER:
            // console.log('WIPE_OTHER_USER FIRING', state, action.payload);
            return {
                ...state,
                otherUser: '',
        };
        case LOGIN_FAILED:
            // console.log('SET_CURRENT_USER FIRING', state);
            return {
                ...state,
                loginFailed: true,
            };
        case LOGOUT: 
            return{
                ...state,
                currentUser: '',
            }
        default: //console.log('REDUCER DEFAULT'); 
        return state;
  }
}
