import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import TabsList from './TabsList';
import searchAPI from '../../utils/searchAPI';
import Display from './Display';
import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
import { connect } from "react-redux";
import { getCurrentUser, } from './../../redux-store/App/AppActions';




function Dashboard(props) {
    const tabs = ['Search', 'Board'];
    const location = useLocation();
    const [selected, setSelected] = useState('Search');
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [jobDetailsLookup, setJobDetailsLookup] = useState({});
    const [search, setSearch] = useState({ title: null, job_type: null, city: null, state_province: null,
                                           experience: null });

    useEffect(() => {
        searchAPI().get('/search', { params: search})
            .then((response) => {
                console.log(response.data.responses)
                return response.data.responses
            })
            .then(data => {
                let jobDetailsStore = {};
                let promises = [];

                data.forEach(job => {
                    let id = job.job_id;
                    promises.push(axiosWithAuth().get(`/jobs/${id}`));
                    jobDetailsStore[id] = {};
                });

                axios.all(promises).then((results) => {
                    results.forEach(response => {
                        jobDetailsStore[response.data.id.toString()] = response.data
                    })
                    setJobDetailsLookup(jobDetailsStore);
                    setJobs(data);
                    setLoading(false);
                  
                });
                
                  
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })
    }, [search])

    return (
        <div className="dashboard">
            <TabsList tabs={tabs} selected={selected} setSelected={setSelected} />
            <Display selected={selected} jobs={jobs} setSearch={setSearch} loading={loading} jobDetailsLookup={jobDetailsLookup}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
        savedArray: state.AppReducer.saved
    }
}

export default connect(mapStateToProps, {getCurrentUser})(Dashboard);

