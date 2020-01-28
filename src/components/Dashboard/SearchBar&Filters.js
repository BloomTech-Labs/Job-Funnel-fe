import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

import './SearchBar&Filters.css';

export const SearchBar = () => {
    const [textSearchTerm, setTextSearchTerm] = useState("");

    const changeHandler = e => {
        setTextSearchTerm(e.target.value);
    };

    return (
        <div classname="search-bars">
            <form className="search">
                <input
                    name="textSearch"
                    id="textSearch"
                    type="text"
                    placeholder="Job Search"
                    onChange={changeHandler}
                    value={textSearchTerm}
                    />

            </form>
        </div>
    )
};

export const Filters = () => {
    const [intern, setIntern] = useState(false);
    const [junior, setJunior] = useState(false);
    const [midLevel, setMidLevel] = useState(false);
    const [senior, setSenior] = useState(false);
    const [contract, setContract] = useState(false);
    const [remote, setRemote] = useState(false);
    const [fullTime, setFullTime] = useState(false);

    return (
        <div className='filter-container'>
            <div className="filter-list1">
                <label className="options1">Full Time <ToggleSwitch isOn={fullTime} handleToggle={() => setFullTime(!fullTime)} /></label>
                <label className="options2">Remote <ToggleSwitch isOn={remote} handleToggle={() => setRemote(!remote)} /></label>
                <label className="options3">Contract <ToggleSwitch isOn={contract} handleToggle={() => setContract(!contract)} /></label>
                <label className="options4">Internship <ToggleSwitch isOn={intern} handleToggle={() => setIntern(!intern)} /></label>
            </div>
            <div className="filter-list2">
                <label className="options5">Junior Position <ToggleSwitch isOn={junior} handleToggle={() => setJunior(!junior)} /></label>
                <label className="options6">Mid-level Position <ToggleSwitch isOn={midLevel} handleToggle={() => setMidLevel(!midLevel)} /></label>
                <label className="options7">Senior Position <ToggleSwitch isOn={senior} handleToggle={() => setSenior(!senior)} /></label>
            </div>
        </div>
    )
};

export default SearchBar;