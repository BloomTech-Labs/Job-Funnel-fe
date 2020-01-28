import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

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

    return (
        <div className="filter-list">
            <label>Internship <ToggleSwitch isOn={intern} handleToggle={() => setIntern(!intern)} /></label>
            <label>Junior Position <ToggleSwitch isOn={junior} handleToggle={() => setJunior(!junior)} /></label>
            <label>Mid-level Position <ToggleSwitch isOn={midLevel} handleToggle={() => setMidLevel(!midLevel)} /></label>
            <label>Senior Position <ToggleSwitch isOn={senior} handleToggle={() => setSenior(!senior)} /></label>
            <label>Contract <ToggleSwitch isOn={contract} handleToggle={() => setContract(!contract)} /></label>
            <label>Remote <ToggleSwitch isOn={remote} handleToggle={() => setRemote(!remote)} /></label>
        </div>
    )
};

export default SearchBar;