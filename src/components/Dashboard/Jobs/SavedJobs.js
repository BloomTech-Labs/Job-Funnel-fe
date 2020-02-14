import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth"

import { connect } from "react-redux"

    function SavedJobs(props) {
    const [save, setSave] = useState([])

    const id = props.currentUser.id

 useEffect(() => {
    axiosWithAuth().get(`/saved/${id}`)
    .then(res => {
        console.log('response from save jobs', res.data)
        setSave(res.data)
        console.log('save?', save)
    })
    .catch(error => {
        console.error(error.message)
    })
 }, [])
 
    return (
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
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }
  export default connect(mapStateToProps, {})(SavedJobs)