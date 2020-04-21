import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import TabsList from './TabsList';
import searchAPI from '../../utils/searchAPI';
import Display from './Display';




export default function Dashboard() {
    const tabs = ['Search', 'Board'];
    const location = useLocation();
    const [selected, setSelected] = useState('Search');
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState({ title: null, job_type: null, city: null, state_province: null,
                                           experience: null })

    useEffect(() => {
        searchAPI().get('/search', { params: search})
            .then((response) => {
                console.log('RESPONSE: ', response)
                setJobs(response.data.responses);
                // setLoading(false)

            })
            .catch(err => {
                console.log(err)
                // setLoading(false)
            })
    }, [search])

    return (
        <div className="dashboard">
            <TabsList tabs={tabs} selected={selected} setSelected={setSelected} />
            <Display selected={selected} jobs={jobs} setSearch={setSearch}/>
        </div>
    )
}