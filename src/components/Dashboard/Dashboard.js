import React from 'react';
import DashboardCards from "./DashboardCards";
import { SearchBar, Filters } from "./SearchBar&Filters";
import CardTopNav from "./CardTopNav";
import Navigation from "./Navigation";
import SuggestedJobs from "./SuggestedJobs.js";

export default function Dashboard() {
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
                    <DashboardCards />
                    <SuggestedJobs />
                </div>
            </div>
        </>
    )
}

