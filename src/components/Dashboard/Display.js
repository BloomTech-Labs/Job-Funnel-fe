import React from 'react';
import SearchInputs from './SearchInputs';
import JobsList from './JobsList';
import SavedApplied from './SavedApplied';
import Board from './Board';

const Display = ( { selected, jobs, setSearch } ) => {

    if (selected === "Search") {
        return (
            <div className="display">
                <div className="search">
                    <SearchInputs setSearch={setSearch}/>
                    <div className="bottom-wrap">
                        <JobsList jobs={jobs}/>
                        <SavedApplied />
                    </div>
                </div>
            </div>
        )
    } else if (selected === "Board") {
        return (
            <div className="display">
                <div className="board">
                    <Board />
                </div>
            </div>
        )
    }
}

export default Display;