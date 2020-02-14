import React from 'react';
import { Link } from 'react-router-dom';


function DashboardNav() {
    return (
        <div className="dashboardNav">
            <nav>
                <Link to='/Dashboard/Viewed'>
                    <button className="dashboard-nav">History</button>
                </Link>
                <Link to='/Dashboard/Saved'>
                    <button className="dashboard-nav">Saved</button>
                </Link>
                <Link to='/Dashboard'>
                    <button className="dashboard-nav">Suggested</button>
                </Link>
            </nav>
        </div>
    )
}

export default DashboardNav;