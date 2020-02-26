import React from 'react'
import {render} from '@testing-library/react'
import LandingPage from '../components/Account/LandingPage'

test.skip("renders the Landing page component", async () => {
    const { getByText } = render(<LandingPage />);

    const heading = getByText(/welcome to your quickhire community/i);
    const p1 = getByText(/You just finish your Bootcamp and want to find a job/i);
    const p2 = getByText(/Join us in Quickhire and we will help you/i);
    const p3 = getByText(/find the tech job that best matches you/i);

    expect(heading).toBeInTheDocument();
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
    expect(p3).toBeInTheDocument();
});