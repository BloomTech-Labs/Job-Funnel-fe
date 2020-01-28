import React from 'react';
import DashboardCards from "./DashboardCards";
import {SearchBar, Filters} from "./SearchBar&Filters";
import CardTopNav from "./CardTopNav";
import TopNav from "./TopNav";
import DashboardCardAPI from "../Dashboard/DashboardCard-api";
import "./Dashboard.css";

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
                    <DashboardCardAPI/>
                </div>
            </div>
        </>
    )
}

