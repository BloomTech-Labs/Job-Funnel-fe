import React from 'react';

function DashboardCards(props) {
    console.log(props, "Props stuff")
    return (
        <div className="card">
            <h4 className="match">Your Skills match 6/7</h4>
            <div className="card-image">
                <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
                <p className="right-side">...</p>
            </div>
            <div className="card-text">
                <h3>{props.title}</h3>
                <p>Microsoft</p>
                <span>📍 Redmond, WA</span>
            </div>
            <button className="save-btn">Save</button>
            <button className="apply-btn">Apply</button>
        </div>
    )
}

export default DashboardCards;