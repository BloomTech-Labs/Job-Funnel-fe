import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import DashboardNav from "./DashboardNav.js";
import SideBar from "./SideBar.js";
import SavedJobs from "./Jobs/SavedJobs.js";
import SuggestedJobs from "./Jobs/SuggestedJobs.js";
import ViewedJobs from "./Jobs/ViewedJobs.js";
import Filter from "./Filter";



export default function Dashboard() {
    const location = useLocation();

    return (
    <>
        <div style={{display: 'flex'}}>
            <SideBar />

            <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', }}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <DashboardNav/>
                {(location.pathname === "/Dashboard" ? <Filter/> : null)}
                </div>
                <Route exact path='/Dashboard' component={SuggestedJobs} />
                <Route exact path='/Dashboard/Saved' component={SavedJobs} />
                <Route exact path='/Dashboard/Viewed' component={ViewedJobs} />
            </div>
        </div>
    </>
    )
}