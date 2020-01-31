import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { SearchBar, Filters } from "./SearchBar&Filters";
import DashboardNav from "./DashboardNav";
import SuggestedJobs from "./SuggestedJobs.js";


function Dashboard() {
    const location = useLocation();

    return (
        <>
            <div style={{display: 'flex'}}>
                <div className="dashboard-SideBar">
                    <SearchBar />
                    <Filters />
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '80%', }}>
                    <DashboardNav />
                    <SuggestedJobs />
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

