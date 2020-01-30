import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import '../less/index.less';

export default function Profile() {
    // #region local state
    const [userInfo, setUserInfo] = useState({
        first_name: "Austin",
        last_name: "Powers",
        email: "austin@gmail.com",
        education: "Lambda School",
        resume: "A PDF",
        profile_img: "https://www.simplemost.com/wp-content/uploads/2018/06/maxresdefault-1-750x500.jpg"
    });
    // #endregion

    useEffect(() => {
        axiosWithAuth()
            .get(`/debug/users`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div className="profile-container">

            <div className="header">
                <div className="profile-summary">
                    <img className="profile-image" src={userInfo.profile_img} />
                    <h3>{userInfo.first_name} {userInfo.last_name}</h3>
                    <h4>Data Scientist</h4>
                    {/* <h3>{userInfo.firstName} {userInfo.lastName}</h3> */}
                </div>
            </div>

            <div className="main-profile">
                <div className="profile-body-left">
                    <div className="about-me">
                        <h3>About Me</h3>
                        <p>International Man of Mystery</p>
                        <p>Education: {userInfo.education}</p>
                    </div>
                    <div className="resume">
                        <h2>Professional Links</h2>
                        <p>Resume: {userInfo.resume}</p>
                        <h3>Artifacts</h3>
                        <h4>Github: </h4>
                        <h4>Portfolio: </h4>
                        <p>Artifacts will go under resume as well</p>
                    </div>
                </div>
                <div className="profile-body-right">
                    <div className="skills">
                        <h2>Skills:</h2>
                        <p>This is where the skills would be listed</p>
                    </div>
                    <div className="job-pref">
                        <h2>Job Preferences</h2>
                        <p>This is where the job preferences will go</p>
                    </div>
                </div>
            </div>

        </div>
    )
}



