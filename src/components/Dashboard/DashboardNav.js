import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNav() {
    return (
        <div className="dashboardNav">
            <nav>
                <button><Link to='/Dashboard/Viewed'>History</Link></button>
                <button><Link to='/Dashboard/Saved'>Saved</Link></button>
                <button><Link to='/Dashboard'>Suggested</Link></button>
            </nav>
        </div>
    )
}

export default DashboardNav;