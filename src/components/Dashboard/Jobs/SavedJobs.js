import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth"

import { connect } from "react-redux"
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

    function SavedJobs(props) {
        
    console.log('what do we have here', props)
    const [save, setSave] = useState([])
    const [loading, setLoading] = useState(false);

    const id = props.currentUser.id

    

 useEffect(() => {
    setLoading(true);
    axiosWithAuth().get(`/saved/${id}`)
    .then(res => {
        console.log('response from save jobs', res.data)
        setSave(res.data)
        setLoading(false);
    })
    .catch(error => {
        console.error(error.message)
        setLoading(false);
    })
 }, [id])

console.log('i dont understand', save)
//  const handleDelete = () => {
//      setLoading(true)
//      axiosWithAuth().delete(`/saved/${props.match.params.id}`)
//         .then(res => {
//                 console.log('erased job from saved table?', res.data)
//                 setLoading(false)
//                 setSave({...save})
//             })
//             .catch(error => {
//                 console.error(error)
//                  setLoading(false)
//             })
//  }
    if(save.length < 1){
        return (
            <div className="empty-jobs">
                <h1>Nothing here yet...Save a job in <Link to ="/Dashboard">Dashboard</Link> to continue!</h1>
            </div>
        )
    }
    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="saved-jobs-main">
                {save.map(e => {
                    return (
                        <div key={id} className="card-saved-jobs">
                            <h3>{e.companyName}</h3>
                            <h5>📍{e.city} {e.stateOrProvince}, {e.country}</h5>
                            <p> Overview <br></br>{e.description.slice(0,250)}...</p>
                            {/* <p>{e.testexternal_url}</p> */}
                            <div className="saved-buttons">
                                <button>Unsave</button>
                                <button>More Info</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </StyledLoader>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }
  export default connect(mapStateToProps, {})(SavedJobs)

  const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;

