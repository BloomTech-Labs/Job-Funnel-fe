import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tab = ( { tab, icon, selected, setSelected } ) => {

    const handleClick = () => {
        setSelected(tab);
    }

    return (
        <div className="tab" onClick={handleClick} style={{backgroundColor: `${selected === tab ? 'lightgray' : 'transparent'}`, marginTop: `${tab === 'Search' ? '20px' : '10px'}`}}>
            <FontAwesomeIcon icon={icon} style={{marginRight: '3px', color: '#504e4e'}}/>
            {tab}
        </div>
    )
}

export default Tab;