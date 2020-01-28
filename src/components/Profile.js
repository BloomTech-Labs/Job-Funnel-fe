import React, { useState } from 'react';
import './profile.css'


export default function Profile() {
    const [image, setImage] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [resume, setResume] = useState([]);
    const [artifactURL, setArtifactURL] = useState([]);
    const [skills, setSkills] = useState(null);
    const [jobPref, setJobPref] = useState('');

    return (
        <>
        <div>THIS IS WHERE THE NAV WILL GO</div>
        <div className="profile-container">
            <div className="image-container">
                <img className="profile-image" src="https://www.simplemost.com/wp-content/uploads/2018/06/maxresdefault-1-750x500.jpg" />
                <div className="image-content">
                    <h3>Austin Powers</h3>
                    <h4>Data Scientist</h4>
                    {/* <h3>{userInfo.firstName} {userInfo.lastName}</h3> */}
                </div>
            </div>
            <div className="profile-body-container">
                <div className="about-me">
                    <h3>About Me</h3>
                    <p>International Man of Mystery</p>
                </div>
                <div className="resume">
                    <p>This is where the resume will go.</p>
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



