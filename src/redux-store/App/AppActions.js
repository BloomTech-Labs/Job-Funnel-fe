import axiosWithAuth from "../../utils/axiosWithAuth.js";


export const LOADING_START = 'LOADING_START';
export const LOADING_DONE = 'LOADING_DONE';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_OTHER_USER = 'SET_OTHER_USER';
export const WIPE_OTHER_USER = 'WIPE_OTHER_USER';
export const SAVED_JOBS = 'SAVED_JOBS';
export const DELETE_JOBS = 'DELETE_JOBS';
export const GET_SAVED_APPLIED_JOBS = 'GET_SAVED_APPLIED_JOBS';
export const APPLIED_JOBS = "APPLIED_JOBS";
export const DELETE_APPLIED = "DELETE_APPLIED";


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
export const wipeOtherUser = () => (dispatch) => {
  // dispatch({ type: WIPE_OTHER_USER, payload: '' });
  // return null;
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
export const adminUpdateUser = (id, userObj) => (dispatch) => {
  // axiosWithAuth().put(`/admin/users/${id}`, userObj)
  // .then(res =>{
  //     console.log(res);
  //     dispatch({ type: SET_OTHER_USER, payload: res.data })
  // })
  // .catch(err => { console.log('adminUpdateUser CATCH ERROR: ', err.response.data.message)
  //     alert(err.response.data.message); });
  // return null;
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
      console.log("deleteProfilePicture res: ", res);
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
export const adminAddProfilePicture = (id, formData, setPictureLoading) => (
  dispatch
) => {
  // console.log('adminAddProfilePicture firing');
  // console.log(id, formData)
  // axiosWithAuth().post(`/admin/user/${id}/picture`, formData)
  // .then(res =>{
  //     console.log('adminAddProfilePicture res: ', res);
  //     dispatch({ type: SET_OTHER_USER, payload: res.data });
  //     setPictureLoading(false);
  // })
  // .catch(err => { console.log('adminAddProfilePicture CATCH ERROR: ', err.response.data.message)
  //     alert(err.response.data.message);
  //     setPictureLoading(false);});
  // return null;
};
export const adminUpdateProfilePicture = (id, formData, setPictureLoading) => (
  dispatch
) => {
  // console.log('adminUpdateProfilePicture firing');
  // console.log(id, formData)
  // axiosWithAuth().put(`/admin/user/${id}/picture`, formData)
  // .then(res =>{
  //     console.log('adminUpdateProfilePicture res: ', res);
  //     dispatch({ type: SET_OTHER_USER, payload: res.data });
  //     setPictureLoading(false);
  // })
  // .catch(err => { console.log('adminUpdateProfilePicture CATCH ERROR: ', err.response.data.message)
  //     alert(err.response.data.message);
  //     setPictureLoading(false);});
  // return null;
};
export const adminDeleteProfilePicture = (id, setPictureLoading) => (
  dispatch
) => {
  // console.log('adminDeleteProfilePicture firing');
  // axiosWithAuth().delete(`/admin/user/${id}/picture`)
  // .then(res =>{
  //     // console.log('adminDeleteProfilePicture res: ', res);
  //     dispatch({ type: SET_OTHER_USER, payload: {profile_picture: ''} });
  //     setPictureLoading(false);
  // })
  // .catch(err => { console.log('adminDeleteProfilePicture CATCH ERROR: ', err)
  //     alert(err.response.data.message);
  //     setPictureLoading(false);});
  // return null;
};

// DEL /users/user
// /users/user
// Logged in user can delete account

// DEL /admin/users/:id
// /admin/users/:id
// Delete a user by id as admin

export const updateSaved = (saved) => (dispatch) => {
  axiosWithAuth()
    .post("/saved/", saved)
    .then((res) => {
      dispatch({ type: SAVED_JOBS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};


export const updateSaved = (saved, user_id) => dispatch => {
    axiosWithAuth().post('/saved/', saved)
        .then(res => {
            console.log('saved updated', res.data);

            //TO-DO: update BE to return a full job object to avoid extra call (use SAVED_JOBS)
            axiosWithAuth().get(`/saved/${user_id}`)
                .then(res => {
                    console.log('response from save jobs', res.data)
                    dispatch({ type: SAVED_JOBS, payload: res.data });
                })
                .catch(error => {
                    console.error(error.message)
                })

        })
        .catch(err => {
            console.log(err)
        });
    return null;
}

export const deleteSaved = (job_id) => dispatch => {
    console.log('deleting')
    axiosWithAuth().delete(`/saved/${job_id}`)
        .then(res => {
            console.log('erased', res.data);
            dispatch({ type: DELETE_JOBS, payload: job_id });
        })
        .catch(err => {
            console.log(err)
        });
    return null;
}

export const getSavedAppliedJobs = (user_id) => dispatch => {
    axiosWithAuth().get(`/saved/${user_id}`)
        .then(res => {
            console.log('response from save jobs', res.data)
            // let SavedCopy = res.data.filter((e) => e.status === "saved")
            // setSavedJobs(SavedCopy)
            // setLoading(false);
            // console.log('SAVED JOBS HERE: ', SavedCopy)
            dispatch( { type: GET_SAVED_APPLIED_JOBS, payload: res.data } );
        })
        .catch(error => {
            console.error(error.message)
            // setLoading(false);
        })
}



export const updateApplied = (applied) => (dispatch) => {
  console.log(" applied from actions", applied);

  axiosWithAuth()
    .post("/saved/", applied)
    .then((res) => {
      dispatch({ type: APPLIED_JOBS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};


export const deleteApplied = (job_id) => (dispatch) => {
  console.log("deleting applied from actions", job_id);
  axiosWithAuth()
    .delete(`/saved/${job_id}`)
    .then((res) => {
      dispatch({ type: DELETE_APPLIED, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
