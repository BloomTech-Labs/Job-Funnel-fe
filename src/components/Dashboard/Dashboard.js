import React from 'react';
import DashboardCards from "./DashboardCards";
import {SearchBar, Filters} from "./SearchBar&Filters";
import CardTopNav from "./CardTopNav";
import TopNav from "./TopNav";
import SuggestedJobs from "./SuggestedJobs.js";

export default function Dashboard() {
    return (
        <>
            <TopNav/>
            <div className="container">
                <div className="left-nav">
                    <SearchBar/>
                    <Filters/>
                </div>
                <div className="card-items">
                    <CardTopNav/>
                    <DashboardCards/>
                    <SuggestedJobs />
                </div>
            </div>
        </>
    )
}

