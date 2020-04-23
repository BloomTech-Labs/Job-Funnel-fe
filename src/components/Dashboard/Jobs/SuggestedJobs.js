import React, { useState, useEffect } from "react";

import JobCard from "./JobCard.js";

import searchAPI from "../../../utils/searchAPI";
import { useLocation } from "react-router-dom";
import Accordion from "./Accordion";
import styled from "styled-components";
import { Loading } from "./../Loading";

export default function SuggestedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchTerm = {
      title: search.experience
        ? `${search.experience} ${search.title}`
        : search.title,
      job_type: search.job_type,
      city: search.city,
      state_province: search.state_province,
    };
    setLoading(true);

    searchAPI()
      .get("/search", {
        params: searchTerm,
      })
      .then((response) => {
        console.log("RESPONSE: ", response);
        setJobs(response.data.responses);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const [search, setSearch] = useState({
    title: null,
    job_type: null,
    city: null,
    state_province: null,
    experience: null,
  });

  const onSelectChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value ? e.target.value : null,
    });
    console.log(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const searchTerm = {
      title: search.experience
        ? `${search.experience} ${search.title}`
        : search.title,
      job_type: search.job_type,
      city: search.city,
      state_province: search.state_province,
    };

    searchAPI()
      .get("/search", {
        params: searchTerm,
      })
      .then((response) => {
        console.log("RESPONSE: ", response);
        setJobs(response.data.responses);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="filter-class ">
        <form className="search-divs" onSubmit={onSelectChange}>
          <div className="search-div">
            {" "}
            <input
              className="search-bar"
              type="text"
              name="title"
              placeholder="Title"
              tabIndex="0"
              onChange={onSelectChange}
            />
          </div>

          <div className="search-div">
            <select
              className="search-bar"
              name="experience"
              onChange={onSelectChange}
            >
              <option defaultValue="">Experience</option>
              <option value="">Show All Jobs</option>
              <option value="Intern">Internship</option>
              <option value="Entry">Entry</option>
              <option value="Mid">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div className="search-div">
            {" "}
            <input
              className="search-bar"
              type="text"
              name="city"
              placeholder="City"
              tabIndex="0"
              onChange={onSelectChange}
              handleSubmit={onSelectChange}
            />
          </div>
          <div className="search-div">
            <input
              className="search-bar"
              type="text"
              name="state_province"
              placeholder="State"
              tabIndex="0"
              onChange={onSelectChange}
              handleSubmit={onSelectChange}
            />
          </div>

          <button
            className="submit-button animated flipInX delay-1s faster"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div
          className={
            loading === false && jobs.length < 1
              ? "card-container-message"
              : "card-container"
          }
        >
          {loading === false && jobs.length < 1 ? (
            <div className="use-search  animated flipInX ">
              <h2>Use the search above to find your next job!</h2>
            </div>
          ) : (
            jobs.map((job, index) => {
              // console.log(job);
              return (
                <Accordion
                  key={index}
                  id={job.job_id}
                  title={job.title}
                  description={job.description}
                  company={job.company_name}
                  image={job.company_logo_url}
                  location={`${job.location_city}, ${job.location_state_province}`}
                />
              );
            })
          )}
        </div>
      )}
    </>
  );
}

/* const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`; */
