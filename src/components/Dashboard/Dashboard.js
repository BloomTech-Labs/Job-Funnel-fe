import React, { useEffect, useState } from 'react';
import DashboardCards from "./DashboardCards";
import { connect } from 'react-redux';
import { SearchBar, Filters } from "./SearchBar&Filters";
import CardTopNav from "./CardTopNav";
import Navigation from "./Navigation";
import SuggestedJobs from "./SuggestedJobs.js";
import ModalBase from '../modals/Modal-Base';

function Dashboard(props) {
    const user = props.currentUser;
    

    useEffect(() => {
        if(user.resume === null){
            console.log('this is checking for education')
            return <ModalBase />
        }
    })


    return (
        <>
            <ModalBase/>
            <Navigation />
            <div className="container">
                <div className="left-nav">
                    <SearchBar />
                    <Filters />
                </div>
                <div className="card-items">
                    <CardTopNav />
                    <DashboardCards />
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

