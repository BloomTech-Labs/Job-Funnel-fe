import React from 'react';
import { LinkNav } from './../Styled/Styled';

// dashboard navigation at the top of the dashboard that allows you to go between the dashboard, saved, and applied pages
function DashboardNav() {
    return (
        <div className="dashboardNav">
            <nav>
                {/* <Link to='/Dashboard'>
                    <button className="dashboard-nav">Dashboard</button>
                </Link> */}
                <LinkNav to='/Dashboard/Applied'>
                    Applied
                </LinkNav>
                <LinkNav to='/Dashboard/Saved'>
                    Saved
                </LinkNav>
            </nav>
        </div>
    )
}

export default DashboardNav;