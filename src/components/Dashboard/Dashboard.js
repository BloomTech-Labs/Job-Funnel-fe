import React, { useEffect, useState } from 'react';
import DashboardCards from "./DashboardCards";
import { connect } from 'react-redux';
import { SearchBar, Filters } from "./SearchBar&Filters";
import CardTopNav from "./CardTopNav";
import Navigation from "./Navigation";
import SuggestedJobs from "./SuggestedJobs.js";


function Dashboard() {

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="left-nav">
                    <SearchBar />
                    <Filters />
                </div>
                <div className="card-items">
                    <CardTopNav />
                    <SuggestedJobs />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log('mapstatetoprops: ', state);
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }

export default connect(mapStateToProps, {})(Dashboard)

