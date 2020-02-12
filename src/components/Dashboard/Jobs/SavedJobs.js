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
        console.error(error)
    })
 }, [])

    return (
        <div>
            {save.map(e => {
                return (
                    <div key={id}>
                        <h3>{e.companyName}</h3>
                        <p>{e.description}</p>
                        <p>{e.city}</p>
                        <p>{e.stateOrProvince}</p>
                        <p>{e.country}</p>
                        <p>{e.testexternal_url}</p>
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