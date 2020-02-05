import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import DashboardNav from "./DashboardNav.js";
import SideBar from "./SideBar.js";
import JobDetails from "./Jobs/JobDetails.js";
import SavedJobs from "./Jobs/SavedJobs.js";
import SuggestedJobs from "./Jobs/SuggestedJobs.js";
import ViewedJobs from "./Jobs/ViewedJobs.js";


export default function Dashboard() {
    const location = useLocation();

    return (
    <>
        <div style={{display: 'flex'}}>
            <SideBar />

            <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', }}>
                <DashboardNav />
                <Route exact path='/Dashboard' component={SuggestedJobs} />
                <Route exact path='/Dashboard/Job/:id' render={props => <JobDetails {...props} />} />
                <Route exact path='/Dashboard/Saved' component={SavedJobs} />
                <Route exact path='/Dashboard/Viewed' component={ViewedJobs} />
            </div>
        </div>
    </>
    )
}