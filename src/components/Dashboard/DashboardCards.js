import React from 'react';
import './Dashboard.css';

function DashboardCards() {
    return (
        <>
        <div className="card-container">
            <div className="card">
                <h4 className="match">Your Skills match 6/7</h4>
                <hr/>
                <div className="card-image">
                    <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
                    <p className="right-side">...</p>
                </div>
                <div className="card-text">
                    <h3>Full Stack Web Developer</h3>
                    <p>Microsoft</p>
                    <span>📍 Redmond, WA</span>
                </div>
            </div>

            <div className="card">
                <h4 className="match">Your Skills match 6/7</h4>
                <hr/>
                <div className="card-image">
                    <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
                    <p className="right-side">...</p>
                </div>
                <div className="card-text">
                    <h3>Full Stack Web Developer</h3>
                    <p>Microsoft</p>
                    <span>📍 Redmond, WA</span>
                </div>
            </div>

            <div className="card">
                <h4 className="match">Your Skills match 6/7</h4>
                <hr/>
                <div className="card-image">
                    <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
                    <p className="right-side">...</p>
                </div>
                <div className="card-text">
                    <h3>Full Stack Web Developer</h3>
                    <p>Microsoft</p>
                    <span>📍 Redmond, WA</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardCards;