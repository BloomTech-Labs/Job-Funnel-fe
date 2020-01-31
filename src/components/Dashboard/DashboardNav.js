import React from 'react';

function DashboardNav() {
    return (
        <div className="top-bar">
            <ul className="top-list">
                <button className="top-nav-btn">Applied</button>
                <button className="top-nav-btn">Skipped</button>
                <button className="top-nav-btn">Saved</button>
            </ul>
        </div>
    )
}

export default DashboardNav;