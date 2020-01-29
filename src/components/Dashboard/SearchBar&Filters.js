import React, { useState } from 'react';


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
    const [toggles, setToggles] = useState({
        intern: false,
        junior: false,
        mid: false,
        senior: false,
        contract: false,
        remote: false,
    });

    const handleToggle = e => {
        console.log('e.target', e.target)
        console.log("handle Toggle log", e.target.name, e.target.value);
        // if(e.target.name === "intern"){
        //     setToggles({...toggles, intern: !toggles.intern})
        // }
        setToggles({...toggles, [e.target.name]: !e.target.value});
        console.log('toggles', toggles);
    };


    return (
        <div className="filter-list">
            <p>Internship</p>  
            <label className="switch" style={{width:'60px'}}>
                <input name="intern" type="checkbox" onClick={handleToggle} value={toggles.intern}/>
                <span className="slider round"></span>
            </label>
            <p>Junior Position</p>
            <label className="switch" style={{width:'60px'}}>
                <input name="junior" type="checkbox" onClick={handleToggle} value={toggles.junior} />
                <span className="slider round"></span>
            </label>
            <p>Mid-level Position</p>
            <label className="switch" style={{width:'60px'}}>
                <input name="mid" type="checkbox" onClick={handleToggle} value={toggles.mid} />
                <span className="slider round"></span>
            </label>
            <p>Senior Position</p>
            <label className="switch" style={{width:'60px'}}>
                <input name="senior" type="checkbox" onClick={handleToggle} value={toggles.senior} />
                <span className="slider round"></span>
            </label>
            <p>Contract</p>
            <label className="switch" style={{width:'60px'}}>
                <input name="contract" type="checkbox" onClick={handleToggle} value={toggles.contract} />
                <span className="slider round"></span>
            </label>
            <p>Remote</p>
            <label className="switch" style={{width:'60px'}}>
                <input name="remote" type="checkbox" onClick={handleToggle} value={toggles.remote} />
                <span className="slider round"></span>
            </label>
        </div>
    )
};

export default SearchBar;