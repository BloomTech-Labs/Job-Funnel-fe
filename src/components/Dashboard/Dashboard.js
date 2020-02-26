import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import DashboardNav from "./DashboardNav.js";

import SavedJobs from "./Jobs/SavedJobs.js";
import SuggestedJobs from "./Jobs/SuggestedJobs.js";
import AppliedJobs from "./Jobs/AppliedJobs"




export default function Dashboard() {

    return (
    <>
        <div className="div1" style={{display: 'flex', flexDirection: 'column'  }}>


            <div className="dashboard-nav" >
                
                <DashboardNav/>
                
                </div>
                <Route exact path='/Dashboard' component={SuggestedJobs} />
                <Route exact path='/Dashboard/Saved' component={SavedJobs} />
                <Route exact path='/Dashboard/Applied' component={AppliedJobs} />
            
        </div>
    </>
    )
}