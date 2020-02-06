import React, {useState} from 'react';

const Filter = () => {
    const [search, setSearch] = useState({search: ""});

    const handleChange = event => {
        setSearch({...search, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="filter-class">
            <form onSubmit={event => handleSubmit(event)}>
                <label className="search-bar">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for Jobs"
                        onChange={event => handleChange(event)}/>
                </label>
            </form>
                <select className="job-select">
                    <option value={"Job Type"}>Job Type</option>
                    <option value={"Full Time"}>Full Time</option>
                    <option value={"Part Time"}>Part Time</option>
                    <option value={"Contract"}>Contract</option>
                </select>
                <select className="experience-select">
                    <option value={"Experience"}>Experience</option>
                    <option value={"Junior Position"}>Junior</option>
                    <option value={"Mid-Level Position"}>Mid-Level</option>
                    <option value={"Senior Position"}>Senior</option>
                </select>
            <form onSubmit={event => handleSubmit(event)}>
                <button>Search!</button>
            </form>
        </div>
    )
}

export default Filter