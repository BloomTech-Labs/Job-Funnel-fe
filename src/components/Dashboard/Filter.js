import React, {useState,useEffect} from 'react';
import searchAPI from '../../utils/searchAPI';

const Filter = () => {
    let queryDelay;
    const [search, setSearch] = useState({search: ""});

    const handleInputChange = changeEvent => {
        const searchQuery = changeEvent.target.value;
        const searchInputName = changeEvent.target.name;
        
        clearTimeout(queryDelay);
        queryDelay = setTimeout(() => {
            setSearch({...search, [searchInputName]: searchQuery });
        }, 250);
    };
        
    const onSelectChange = (selectEvent) => {
        const selectValue = selectEvent.target.value;
        const selectInputName = selectEvent.target.name;
        setSearch({...search, [selectInputName]: selectValue ? selectValue : undefined });
    }

    useEffect(() => {
        searchAPI().get('/search', {
             params: search,
        }).then((response) => {
            console.log({response})
        })
    }, [search.search, search.jobType, search.experience])

    return (
        <div className="filter-class">
            <div>
                <label>
                    <input className="search-bar"
                        type="text"
                        name="search"
                        placeholder="Search for Jobs"
                        tabIndex="0"
                        onChange={handleInputChange}/>
                </label>
            </div>
            <div>
                <select className="job-select" onChange={onSelectChange} name="jobType">
                    <option value={''}>Job Type</option>
                    <option value={"Full Time"}>Full Time</option>
                    <option value={"Part Time"}>Part Time</option>
                    <option value={"Contract"}>Contract</option>
                </select>
                </div>
                <div>
                <select className="experience-select" onChange={onSelectChange} name="experience">
                    <option value={''}>Experience</option>
                    <option value={"Junior Position"}>Junior</option>
                    <option value={"Mid-Level Position"}>Mid-Level</option>
                    <option value={"Senior Position"}>Senior</option>
                </select>
                </div>
                <div>
           
            </div>
        </div>
    )
}

export default Filter