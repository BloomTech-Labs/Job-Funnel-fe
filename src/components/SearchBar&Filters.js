import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

export const SeachBar = () => {

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