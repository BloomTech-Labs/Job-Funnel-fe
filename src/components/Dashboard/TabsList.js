import React from 'react';
import Tab from './Tab';
import { faSearch, faColumns } from "@fortawesome/free-solid-svg-icons";

const TabsList = ({ tabs, selected, setSelected }) => {
    const icons = {
        "Search": faSearch, 
        "Board": faColumns
    }

    return (
        <div className="tabs-list">
            {tabs.map((tab, i) => {
                return <Tab tab={tab} key={i} icon={icons[tab]} selected={selected} setSelected={setSelected}/>
            })}
        </div>
    )
}

export default TabsList;