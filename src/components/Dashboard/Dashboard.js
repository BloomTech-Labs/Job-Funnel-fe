import React from 'react';
import DashboardCards from "./DashboardCards";
import {SearchBar, Filters} from "./SearchBar&Filters.js";
import Profile from '../Profile';

export default function Dashboard() {
    return (
        <div>
            <SearchBar/>
            <Filters/>
            <Profile/>
            <DashboardCards/>
        </div>
    )
}

