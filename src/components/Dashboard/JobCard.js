import React from 'react';

function JobCard(props) {
    // console.log(props, "Props stuff")
    return (
        <div className="jobCard">
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '0px 15px', }}> 
                <h4>Your Skills match 6/7</h4>
                <p onClick={''}>...</p>
            </div>
            <div className="card-image">
                <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
            </div>
            <div className="card-text">
                <h3>{props.title}</h3>
                <p>Microsoft</p>
                <span>📍 Redmond, WA</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', margin: '15px 0'}}>
                <button className="save-btn">Save</button>
                <button className="apply-btn">Apply</button>
            </div>
        </div>
    )
}

export default JobCard;