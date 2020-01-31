import React from 'react';

import { Link } from "react-router-dom";


function Navigation() {
    return (

        <div className="top-nav">

            <h1>QuickHire</h1>
            <Link to = "/profile">
                <img src="https://www.aalforum.eu/wp-content/uploads/2016/04/profile-placeholder.png" className="profile-image" onclick="" />
            </Link>
        </div>

    )
}

export default Navigation;