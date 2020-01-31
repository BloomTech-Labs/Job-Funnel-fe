import React, { useState } from 'react';

export const SearchBar = () => {
    const [textSearchTerm, setTextSearchTerm] = useState("");

    const changeHandler = e => {
        setTextSearchTerm(e.target.value);
    };

    return (
        <div className="search-bars">
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
        full: false,
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
        <div className="filter-container">
            <div className="filter-list1">
                <div class="slider-div">
                    <p className="full-time">Full Time</p>  
                    <label className="switch">
                    <input name="full" type="checkbox" onClick={handleToggle} value={toggles.full}/>
                    <span className="slider round"></span>
                    </label>
                </div>
                <div class="slider-div">
                    <p className="internship">Internship</p>  
                    <label className="switch">
                    <input name="intern" type="checkbox" onClick={handleToggle} value={toggles.intern}/>
                    <span className="slider round"></span>
                </label> 
                </div>
                <div class="slider-div">
                    <p className="junior">Junior Position</p>
                    <label className="switch">
                    <input name="junior" type="checkbox" onClick={handleToggle} value={toggles.junior} />
                    <span className="slider round"></span>
                    </label>
                </div>
                <div class="slider-div"> 
                    <p className="mid">Mid-level Position</p>
                    <label className="switch">
                    <input name="mid" type="checkbox" onClick={handleToggle} value={toggles.mid} />
                    <span className="slider round"></span>
                    </label>
                </div>
               
            </div>
            <div className="filter-list2">
                <div class="slider-div">
                <p className="senior">Senior Position</p>
                <label className="switch">
                <input name="senior" type="checkbox" onClick={handleToggle} value={toggles.senior} />
                <span className="slider round"></span>
                </label>
                 </div>
               <div class="slider-div"> 
                    <p className="contract">Contract</p>
                    <label className="switch">
                    <input name="contract" type="checkbox" onClick={handleToggle} value={toggles.contract} />
                    <span className="slider round"></span>
                </label>
                </div>
               <div class="slider-div"> 
                    <p className="remote">Remote</p>
                    <label className="switch">
                    <input name="remote" type="checkbox" onClick={handleToggle} value={toggles.remote} />
                    <span className="slider round"></span>
                </label>
                </div>
               
            </div>
        </div>
    )
};

export default SearchBar;