import React from 'react'
import { render } from '@testing-library/react'
import JobCard from '../components/Dashboard/Jobs/JobCard.js'

test.skip("tests if the Job Card renders correctly", async () => {

    const testJob = {
        id: 3,
        title: "test title",
        description: "test job description",
        company: "test company",
        location: "test location"
    };

    const { getByText } = render(<JobCard props={testJob} />);

    const title = getByText(/test title/i);
    const description = getByText(/test job description/i);
    const company = getByText(/test company/i);
    const location = getByText(/test location/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(location).toBeInTheDocument();

});