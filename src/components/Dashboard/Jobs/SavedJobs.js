import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth"

import { connect } from "react-redux"
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

    function SavedJobs(props) {

    const [save, setSave] = useState([])
    const [loading, setLoading] = useState(false);

    const id = props.currentUser.id

    // console.log('is this the error here', id)

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
 
    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="saved-jobs-main">
                {save.map(e => {
                    return (
                        <div key={id}  className="card-saved-jobs">
                            <h3>{e.companyName}</h3>
                            <h3>📍{e.city} {e.stateOrProvince}, {e.country}</h3>
                            <p> Overview: {e.description.slice(0,300)}...</p>
                            {/* <p>{e.testexternal_url}</p> */}
                            <button>More Info</button>
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