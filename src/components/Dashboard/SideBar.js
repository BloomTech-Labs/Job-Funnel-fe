import React from 'react'
import { SearchBar, Filters } from "./SearchBar&Filters";


export default function SideBar() {

    return (
        <div className="dashboard-SideBar">
            <SearchBar />
            <Filters />
        </div>
    )
}