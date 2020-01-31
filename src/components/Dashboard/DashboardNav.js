import React from 'react';

function DashboardNav() {
    return (
        <div className="dashboardNav">
            <nav>
                <button className="top-nav-btn">Applied</button>
                <button className="top-nav-btn">Skipped</button>
                <button className="top-nav-btn">Saved</button>
            </nav>
        </div>
    )
}

export default DashboardNav;