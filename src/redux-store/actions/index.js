export const OPEN_MODAL = "OPEN_MODAL";


export const openModal = () => dispatch => {
    dispatch({ type: OPEN_MODAL })
    
}

// export const getCourses = () => dispatch => {
//     axiosWithAuth()
//       .get(`/courses`)
//       .then(res => {
//             console.log(res.data);
//             dispatch({ type: SET_COURSES, payload: res.data });
//       })
//       .catch(err => {
//         console.log("CATCH ERROR: ", err.response.data.message);
//       });
// }