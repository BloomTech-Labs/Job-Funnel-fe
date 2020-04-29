import axiosWithAuth from "../../utils/axiosWithAuth.js";

export const LOADING_START = "LOADING_START";
export const LOADING_DONE = "LOADING_DONE";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_OTHER_USER = "SET_OTHER_USER";
export const WIPE_OTHER_USER = "WIPE_OTHER_USER";
export const SAVED_JOBS = "SAVED_JOBS";
export const DELETE_JOBS = "DELETE_JOBS";
export const DELETE_APPLIED = "DELETE_APPLIED";
export const GET_SAVED_APPLIED_JOBS = "GET_SAVED_APPLIED_JOBS";
export const APPLIED_JOBS = "APPLIED_JOBS";

// export const loadingStart = () =>{
//     return { type: LOADING_START, payload: null };
// }
export const loadingDone = () => {
  return { type: LOADING_DONE, payload: null };
};
export const login = (user) => {
  return { type: SET_CURRENT_USER, payload: user };
};
export const logout = () => {
  return { type: LOGOUT, payload: null };
};
export const getCurrentUser = () => (dispatch) => {
  axiosWithAuth()
    .get("/users/user")
    .then((res) => {
      dispatch({ type: SET_CURRENT_USER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      console.log("GetCurrentUser CATCH ERROR: ", err.response.data.message);
    });
  return null;
};

export const updateUser = (userObj, setLoading) => (dispatch) => {
  axiosWithAuth()
    .put(`/users/user`, userObj)
    .then((res) => {
      console.log("update user", res);
      dispatch({ type: SET_CURRENT_USER, payload: res.data });
      dispatch({ type: SET_OTHER_USER, payload: res.data });
    })
    .catch((err) => {
      setLoading(false);
      console.log("updateUser CATCH ERROR: ", err.response.data.message);
      alert(err.response.data.message);
    });
  return null;
};

export const updateProfilePicture = (formData, setPictureLoading) => (
  dispatch
) => {
  // console.log('updateProfilePicture firing', formData);
  axiosWithAuth()
    .put("/users/user/picture", formData)
    .then((res) => {
      console.log("updateProfilePicture res: ", res);
      dispatch({ type: SET_CURRENT_USER, payload: res.data });
      setPictureLoading(false);
    })
    .catch((err) => {
      console.log(
        "updateProfilePicture CATCH ERROR: ",
        err.response.data.message
      );
      alert(err.response.data.message);
      setPictureLoading(false);
    });
  return null;
};
export const deleteProfilePicture = (setPictureLoading) => (dispatch) => {
  console.log("deleteProfilePicture firing");
  axiosWithAuth()
    .delete("/users/user/picture")
    .then((res) => {
      dispatch({ type: SET_CURRENT_USER, payload: { profile_img: "" } });
      setPictureLoading(false);
    })
    .catch((err) => {
      console.log(
        "deleteProfilePicture CATCH ERROR: ",
        err.response.data.message
      );
      alert(err.response.data.message);
      setPictureLoading(false);
    });
  return null;
};

export const updateSaved = (saved, user_id) => (dispatch) => {
  axiosWithAuth()
    .post("/saved/", saved)
    .then((res) => {
      axiosWithAuth()
        .get(`/saved/${user_id}`)
        .then((res) => {
          dispatch({ type: SAVED_JOBS, payload: res.data });
        })
        .catch((error) => {
          console.error(error.message);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  return null;
};

export const deleteSaved = (job_id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/saved/${job_id}`)
    .then((res) => {
      dispatch({ type: DELETE_JOBS, payload: job_id });
    })
    .catch((err) => {
      console.log(err);
    });
  return null;
};

export const deleteApplied = (job_id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/saved/${job_id}`)
    .then((res) => {
      dispatch({ type: DELETE_APPLIED, payload: job_id });
    })
    .catch((err) => {
      console.log(err);
    });
  return null;
};

export const getSavedAppliedJobs = (user_id) => (dispatch) => {
  axiosWithAuth()
    .get(`/saved/${user_id}`)
    .then((res) => {
      dispatch({ type: GET_SAVED_APPLIED_JOBS, payload: res.data });
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export const updateApplied = (applied, user_id) => (dispatch) => {
  axiosWithAuth()
    .post("/saved/", applied)
    .then((res) => {
      axiosWithAuth()
        .get(`/saved/${user_id}`)
        .then((res) => {
          dispatch({ type: APPLIED_JOBS, payload: res.data });
        })
        .catch((error) => {
          console.error(error.message);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
