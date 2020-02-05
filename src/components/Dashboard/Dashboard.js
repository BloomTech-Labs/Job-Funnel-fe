import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from "../../utils/PrivateRoute.js"
import DashboardNav from "./DashboardNav.js";
import SideBar from "./SideBar.js";
import JobDetails from "./Jobs/JobDetails.js";
import SavedJobs from "./Jobs/SavedJobs.js";
import SuggestedJobs from "./Jobs/SuggestedJobs.js";
import ViewedJobs from "./Jobs/ViewedJobs.js";


function Dashboard() {
    const location = useLocation();

    return (
    <>
        <div style={{display: 'flex'}}>
            <SideBar />

            <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', }}>
                <DashboardNav />
                <PrivateRoute path='/Dashboard' component={SuggestedJobs} />
                <PrivateRoute path='/Dashboard/Job/:id' component={JobDetails} />
                <PrivateRoute path='/Dashboard/Saved' component={SavedJobs} />
                <PrivateRoute path='/Dashboard/Viewed' component={ViewedJobs} />
            </div>
        </div>
    </>
    )
}

const mapStateToProps = state => {
    // console.log('mapstatetoprops: ', state);
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }

export default connect(mapStateToProps, {})(Dashboard)

