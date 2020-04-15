<<<<<<< HEAD
/* import React from 'react';
import { LinkNav } from './../Styled/Styled';
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> master

function DashboardNav() {
    return (
        <div className="dashboardNav">
            <nav>
<<<<<<< HEAD

                <LinkNav to='/Dashboard/Applied'>
                    Applied
                </LinkNav>
                <LinkNav to='/Dashboard/Saved'>
                    Saved
                </LinkNav>
=======
                <Link to='/Dashboard'>
                    <button className="dashboard-nav">Dashboard</button>
                </Link>
                <Link to='/Dashboard/Saved'>
                    <button className="dashboard-nav">Saved</button>
                </Link>
                <Link to='/Dashboard/Applied'>
                    <button className="dashboard-nav">Applied</button>
                </Link>
>>>>>>> master
            </nav>
        </div>
    )
}

export default DashboardNav; */