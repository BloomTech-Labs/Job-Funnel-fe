import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import DashboardNav from "./DashboardNav.js";
import  {Leftnav} from './Leftnav.js';
import SavedJobs from "./Jobs/SavedJobs.js";
import SuggestedJobs from "./Jobs/SuggestedJobs.js";
import { RightNav } from './RightNav.js'
import AppliedJobs from "./Jobs/AppliedJobs"

export default function Dashboard() {

    return (
        <>
            <div id="dash">
                <Leftnav />
                <div className="div1" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Route exact path='/Dashboard' component={SuggestedJobs} />
                    <Route exact path='/Dashboard/Saved' component={SavedJobs} />
                    <Route exact path='/Dashboard/Applied' component={AppliedJobs} />
                </div>

                <RightNav />
            </div>
        </>
    )
}