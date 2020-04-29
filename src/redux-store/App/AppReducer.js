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
  APPLIED_JOBS,
} from "./AppActions.js";

const initialState = {
  currentUser: "",
  saved: [],
  savedLookup: {},
  applied: [],
  appliedLookup: {},
  otherUser: "",
  loading: true,
  toggle: false,
  loginFailed: false,
  imageFileTypes:
    ".ai, .bmp, .jpeg, .jpg, .gif, .pdf, .png, .psd, .svg, .tga, .tiff,",
  videoFileTypes: ".3gp, .avi, .ogv, .mkv, .mov, .mpeg, .mp4, .wmv",
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
        loginFailed: false,
      };
    case SET_OTHER_USER:
      return {
        ...state,
        otherUser: { ...state.otherUser, ...action.payload },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginFailed: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: "",
      };
    case SAVED_JOBS:
      let arr = [];
      let obj = {};

      action.payload.forEach((job) => {
        if (job.status === "saved") {
          arr.push(job);
          obj[job.job_id] = job;
        }
      });

      return {
        ...state,
        saved: arr,
        savedLookup: obj,
        toggle: true,
      };
    case DELETE_JOBS:
      let updatedList = state.saved.filter(
        (job) => job.job_id !== action.payload
      );
      let updatedLookup = state.savedLookup;
      delete updatedLookup[action.payload];

      return {
        ...state,
        saved: updatedList,
        savedLookup: updatedLookup,
        toggle: true,
      };
    case DELETE_APPLIED:
      let updatedApplied = state.applied.filter(
        (job) => job.job_id !== action.payload
      );
      let updatedLookupApplied = state.appliedLookup;
      delete updatedLookupApplied[action.payload];
      return {
        ...state,
        appliedLookup: updatedLookupApplied,
        applied: updatedApplied,
        toggle: true,
      };
    case GET_SAVED_APPLIED_JOBS:
      let savedArr = [];
      let savedObj = {};
      let appliedArr = [];
      let appliedObj = {};

      action.payload.forEach((job) => {
        if (job.status === "saved") {
          savedArr.push(job);
          savedObj[job.job_id] = job;
        }
        if (job.status === "applied") {
          appliedArr.push(job);
          appliedObj[job.job_id] = job;
        }
      });

      return {
        ...state,
        saved: savedArr,
        savedLookup: savedObj,
        applied: appliedArr,
        appliedLookup: appliedObj,
      };

    case APPLIED_JOBS:
      let arr2 = [];
      let obj2 = {};

      action.payload.forEach((job) => {
        if (job.status === "applied") {
          arr2.push(job);
          obj2[job.job_id] = job;
        }
      });
      return {
        ...state,
        applied: arr2,
        appliedLookup: obj2,
        toggle: true,
      };

    default:
      return state;
  }
};
