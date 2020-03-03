import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.jpg'



//QuickHire homepage - will render when you first visit site
const LandingPage = () => {
    return (
        <section className='animated zoomInUp fast landing-page'>
            <div className='content-div'>
                <div>
                    <h1 >Welcome to your Quickhire Community.</h1>
                </div>
                <div className='p-div' >
                    <p className='p-1'>You've been learning how to program, day in and day out, for the past nine months - Now, you're looking for your next, high-paying job.</p>
                    <p className='p-2'>But, finding that job is a challenge, and the process as a whole, is broken. </p>
                    <p className='p-3'> Join us at Quickhire.dev, where we help you find tech jobs, tailored completely to you. </p>
                </div>

                
                <div className='bottom-content'>
                    <div className='animated flip button-div'><Link to="/Register"> <button >Join Now!</button></Link></div>
                    <div className='img-div'><img src={logo} /></div>
                </div>

            </div>


        </section>

    )
}

export default LandingPage 