import {
    SET_CURRENT_USER, 
    LOGIN_FAILED, 
    LOGOUT, 
    SET_OTHER_USER,
    WIPE_OTHER_USER, 
    SAVED_JOBS, 
    DELETE_JOBS, 
    GET_SAVED_APPLIED_JOBS, 
    DELETE_APPLIED, 
    APPLIED_JOBS
} from './AppActions.js';

const initialState = {
    currentUser: '',
    saved: [],
    savedLookup: {},
    applied: [],
    appliedLookup: {},
    otherUser: '',
    loading: true,
    toggle: false,
    loginFailed: false,
    imageFileTypes: ".ai, .bmp, .jpeg, .jpg, .gif, .pdf, .png, .psd, .svg, .tga, .tiff,",
    videoFileTypes: ".3gp, .avi, .ogv, .mkv, .mov, .mpeg, .mp4, .wmv",

};

export const AppReducer = (state = initialState, action) => {

    // console.log('AppReducer initialState: ', initialState);
    // console.log('AppReducer firing: ', action);
    switch (action.type) {
        case SET_CURRENT_USER:
            // console.log('SET_CURRENT_USER FIRING', state, action.payload);
            return {
                ...state,
                currentUser: { ...state.currentUser, ...action.payload },
                loginFailed: false,
            };
        case SET_OTHER_USER:
            // console.log('SET_OTHER_USER FIRING', state, action.payload);
            return {
                ...state,
                otherUser: { ...state.otherUser, ...action.payload },
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
            return {
                ...state,
                currentUser: '',
            };
        case SAVED_JOBS:
            console.log('from reducer')
            let arr = [];
            let obj = {};

            action.payload.forEach(job => {
                if (job.status === 'saved') {
                    arr.push(job);
                    obj[job.job_id] = job;
                }
            });

            return {
                ...state,
                saved: arr,
                savedLookup: obj,
                toggle: true
            };
        case DELETE_JOBS:
            let updatedList = state.saved.filter(job => job.job_id !== action.payload);
            let updatedLookup = state.savedLookup;
            delete updatedLookup[action.payload];
            
            return {
                ...state,
                saved: updatedList,
                savedLookup: updatedLookup,
                toggle: true
            }
        case GET_SAVED_APPLIED_JOBS:
            let savedArr = [];
            let savedObj = {};
            let appliedArr = [];
            let appliedObj = {};
            
            action.payload.forEach(job => {
                if (job.status === 'saved') {
                    savedArr.push(job);
                    savedObj[job.job_id] = job;
                }
                if (job.status === 'applied') {
                    appliedArr.push(job);
                    appliedObj[job.job_id] = job;
                }
            });

            return {
                ...state,
                saved: savedArr,
                savedLookup: savedObj,
                applied: appliedArr,
                appliedLookup: appliedObj
            }

          case DELETE_APPLIED:
            console.log("from reducer", action.payload);
            return {
              ...state,

              applied: [...state.saved, `${action.payload}, `],
            };
            
          case APPLIED_JOBS:
            console.log('from reducer')
            let arr2 = [];
            let obj2 = {};

            action.payload.forEach(job => {
                if (job.status === 'applied') {
                    arr2.push(job);
                    obj2[job.job_id] = job;
                }
            });
            return {
                ...state,
                applied: arr2,
                appliedLookup: obj2,
                toggle: true
            };

        default: //console.log('REDUCER DEFAULT'); 
            return state;
    }
}

