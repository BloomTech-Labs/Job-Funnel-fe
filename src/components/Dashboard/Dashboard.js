import React from 'react';
import DashboardCards from "./DashboardCards";
import {SearchBar, Filters} from "./SearchBar&Filters";
import SuggestedJobs from "./SuggestedJobs.js";

export default function Dashboard() {
    return (
        <div>
            {/* <SidebarNav props={props} /> */}
            <SearchBar/>
            <Filters/>
            <DashboardCards/>
            <SuggestedJobs />
        </div>
    )
}

