import React from 'react';
import DashboardCards from "./DashboardCards";
import {SearchBar, Filters} from "./SearchBar&Filters";

export default function Dashboard() {
    return (
        <div>
            <SearchBar/>
            <Filters/>
            <DashboardCards/>
        </div>
    )
}

