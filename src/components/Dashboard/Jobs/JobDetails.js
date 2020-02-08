import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth.js"


export default function JobDetails(props) {
    console.log('job details', props);

   // const [details, setDetails] = useState({});
    

    // useEffect(()=> {
    //     axiosWithAuth().get(`/jobs/${props.match.params.id}`)
    //         .then(response => {
    //             console.log('job details axios response', response);
    //         })
    //         .catch(err => console.error(err))
    // }, []);
    return (
        <div>
            <h1>JobDetails</h1>
        </div>
    )
}

