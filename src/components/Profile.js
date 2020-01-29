import React, { useState, useEffect } from 'react';
import './Profile.css';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

export default function Profile() {
    const [userInfo, setUserInfo] = useState({
        first_name: "Austin",
        last_name: "Powers",
        email: "austin@gmail.com",
        education: "Lambda School",
        resume: "A PDF",
        profile_img: "https://www.simplemost.com/wp-content/uploads/2018/06/maxresdefault-1-750x500.jpg"
    });


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
        <>
        <div>NAV COMPONENT</div>
        <div className="profile-container">
            <div className="image-container">
                <img className="profile-image" src={userInfo.profile_img} />
                <div className="image-content">
                    <h3>{userInfo.first_name} {userInfo.last_name}</h3>
                    <h4>Data Scientist</h4>
                    {/* <h3>{userInfo.firstName} {userInfo.lastName}</h3> */}
                </div>
            </div>
            <div className="profile-body-container">
                <div className="about-me">
                    <h3>About Me</h3>
                    <p>International Man of Mystery</p>
                    <p>Education: {userInfo.education}</p>
                </div>
                <div className="resume">
                    <p>Resume: {userInfo.resume}</p>
                    <p>Artifacts will go under resume as well</p>
                </div>
                <div className="skills">
                    <p>This is where the skills would be listed</p>
                </div>
                <div className="job-pref">
                    <p>This is where the job preferences will go</p>
                </div>
            </div>
        </div>
        </>
    )
}



