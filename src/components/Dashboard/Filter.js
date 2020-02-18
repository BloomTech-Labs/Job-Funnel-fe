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
            <div>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    <input className="search-bar"
                        value
                        type="text"
                        name="search"
                        placeholder="Search for Jobs"
                        tabIndex="0"
                        onChange={event => handleChange(event)}/>
                </label>
            </form>
            </div>
            <div>
                <select className="job-select">
                    <option value={"Job Type"}>Job Type</option>
                    <option value={"Full Time"}>Full Time</option>
                    <option value={"Part Time"}>Part Time</option>
                    <option value={"Contract"}>Contract</option>
                </select>
                </div>
                <div>
                <select className="experience-select">
                    <option value={"Experience"}>Experience</option>
                    <option value={"Junior Position"}>Junior</option>
                    <option value={"Mid-Level Position"}>Mid-Level</option>
                    <option value={"Senior Position"}>Senior</option>
                </select>
                </div>
                <div>
            <form onSubmit={event => handleSubmit(event)}>
                <button>Search!</button>
            </form>
            </div>
        </div>
    )
}

export default Filter