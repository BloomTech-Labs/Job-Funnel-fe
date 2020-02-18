import React from 'react';
import { Link } from 'react-router-dom';


function DashboardNav() {
    return (
        <div className="dashboardNav">
            <nav>
                <Link to='/Dashboard/Saved'>
                    <button className="dashboard-nav">Saved Jobs</button>
                </Link>
                <Link to='/Dashboard'>
                    <button className="dashboard-nav">Dashboard</button>
                </Link>
                <Link to='/Dashboard/Viewed'>
                    <button className="dashboard-nav">History</button>
                </Link>
            </nav>
        </div>
    )
}

export default DashboardNav;