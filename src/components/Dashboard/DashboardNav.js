import React from 'react';
import { Link } from 'react-router-dom';

// dashboard navigation at the top of the dashboard that allows you to go between the dashboard, saved, and applied pages
function DashboardNav() {
    return (
        <div className="dashboardNav">
            <nav>
                <Link to='/Dashboard'>
                    <button className="dashboard-nav">Dashboard</button>
                </Link>
                <Link to='/Dashboard/Saved'>
                    <button className="dashboard-nav">Saved</button>
                </Link>
                <Link to='/Dashboard/Applied'>
                    <button className="dashboard-nav">Applied</button>
                </Link>
            </nav>
        </div>
    )
}

export default DashboardNav;