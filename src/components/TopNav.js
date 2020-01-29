import React, {useState} from "react";

import "./TopNav.css"
import styled from "styled-components";

import { Link } from "react-router-dom";

const TopNav = (props) => {
    if(props.login){
        return (
            <div className="top">
                <h1 className="title">QuickHire</h1>
                <Buttonc>
                <Link to ="/register">
                    <button className="buttonclass">Register</button>
                </Link>
                </Buttonc>
                
            </div>
        )
    } else {
        return (
            <div className="top">
                <h1 className="title">QuickHire</h1>
                <Link to ="/login"><button className="buttonclass">Login</button></Link>
            </div>
        )
    }


}

export default TopNav;

const Buttonc = styled.div`

&: hover .buttonclass{
  background: #3073AB; 
  color: #fff;
  }
`
