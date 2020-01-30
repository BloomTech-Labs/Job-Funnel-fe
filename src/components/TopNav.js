import React, {useState} from "react";


import styled from "styled-components";

import { Link } from "react-router-dom";

const TopNav = (props) => {
    if(props.login){
        return (
            <div className="top">
                <h1 className="title">QuickHire</h1>
                <Link to ="/register">
                    <button >Register</button>
                </Link>
                
            </div>
        )
    } else {
        return (
            <div className="top">
                <h1 className="title">QuickHire</h1>
                <Link to ="/login"><button >Login</button></Link>
            </div>
        )
    }

}

export default TopNav;

