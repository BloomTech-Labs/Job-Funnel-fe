import React from 'react'
import {render} from '@testing-library/react'
import AboutUs from '../components/AboutUs'

test("renders the About us page component", async () => {
    const { getByText } = render(<AboutUs />);

    const heading = getByText(/about us/i);
    const p1 = getByText(/We are QuickHire!/i);
    const p2 = getByText(/Billy is from/i);
    const p3 = getByText(/Austin is from/i);
    const p4 = getByText(/Adam joined Lambda/i);
    const p5 = getByText(/Anthony is from/i);
    const p6 = getByText(/Mauricio is a/i);
    const p7 = getByText(/Logan lives in/i);
    const p8 = getByText(/Pierre is resides/i);
    const p9 = getByText(/Baisal lives in/i);
    const p10 = getByText(/I'm a bilingual/i);

    expect(heading).toBeInTheDocument();
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
    expect(p3).toBeInTheDocument();
    expect(p4).toBeInTheDocument();
    expect(p5).toBeInTheDocument();
    expect(p6).toBeInTheDocument();
    expect(p7).toBeInTheDocument();
    expect(p8).toBeInTheDocument();
    expect(p9).toBeInTheDocument();
    expect(p10).toBeInTheDocument();
});