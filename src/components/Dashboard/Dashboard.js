import React from 'react';
import DashboardCards from "./DashboardCards";
import {SearchBar, Filters} from "./SearchBar&Filters.js";
import Profile from '../Profile';
import SuggestedJobs from "./SuggestedJobs.js";

export default function Dashboard() {
    return (
        <div>
            {/* <SidebarNav props={props} /> */}
            <SearchBar/>
            <Filters/>
            {/* <Profile/> */}
            <DashboardCards/>
            <SuggestedJobs />
        </div>
    )
}

