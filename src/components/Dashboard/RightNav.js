import React, { useState } from 'react';
import SavedJobs from './Jobs/SavedJobs'
import AppliedJobs from './Jobs/AppliedJobs'

export const RightNav = () => {

    return (
        <div id="right-nav" >
            <div id="saved">
                <SavedJobs />
            </div>
            <div id="applied">
                <AppliedJobs />
            </div>
        </div>

    )
}
