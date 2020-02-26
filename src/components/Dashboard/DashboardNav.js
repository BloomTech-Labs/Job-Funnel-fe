import React from 'react';
import { Link } from 'react-router-dom';


function DashboardNav() {
    return (
        <div className="dashboardNav animated flipInX ">
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