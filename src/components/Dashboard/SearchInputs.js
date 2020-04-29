import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { SegmentInline } from "semantic-ui-react";
import { Loading } from "./Loading";

const SearchInput = ({ setSearch }) => {
  const [experience, setExperience] = useState();
  const [jobType, setJobType] = useState();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    title: null,
    job_type: null,
    city: null,
    state_province: null,
    experience: null,
  });

  const experienceOptions = ["Internship", "Entry", "Mid", "Senior"];
  const jobTypeOptions = ["Full time", "Part time", "Contract"];

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value ? e.target.value : null,
    });
  };

  const handleExperienceDropdown = (e) => {
    setExperience(e.value);
    setInputs({ ...inputs, experience: e.value });
  };

  const handleJobTypeDropdown = (e) => {
    setJobType(e.value);
    setInputs({ ...inputs, job_type: e.value });
  };

  const handleSubmit = () => {
    console.log("LOADING TRE");
    setLoading(true);
    console.log("INPUTS", inputs);
    setSearch(inputs);
    setLoading(false);
  };

  return (
    <div className="search-inputs">
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />

      <div style={{ cursor: "pointer" }}>
        <Dropdown
          onChange={handleJobTypeDropdown}
          controlClassName="myControlClassName"
          className="dropdownRoot"
          options={jobTypeOptions}
          value={jobType}
          placeholder="Job type..."
        />
      </div>

      <Dropdown
        onChange={handleExperienceDropdown}
        controlClassName="myControlClassName"
        className="dropdownRoot"
        options={experienceOptions}
        value={experience}
        placeholder="Experience..."
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
      />
      <input
        type="text"
        name="state_province"
        placeholder="State"
        onChange={handleChange}
      />
      {loading ? (
        <Loading />
      ) : (
        <button
          onClick={handleSubmit}
          style={{
            cursor: "pointer",
            backgroundColor: "lightgray",
            outline: "none",
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default SearchInput;
