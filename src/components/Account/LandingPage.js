import React from "react";
import { Link } from "react-router-dom";
import landing from '../../images/landing.png'



//QuickHire homepage - will render when you first visit site
const LandingPage = () => {
    return (
        <section className='animated zoomInUp fast landing-page'>
            <div className='content-div'>
                <div className="landing-info">
                    <h1 >Welcome to your <br />Quickhire Community.</h1>
                    <p className='p-1'>You just finish your Bootcamp and want to find a job.
                    Join us in job funnel and we will help you to find your match!</p>
                    <div className='animated flip button-div'><Link to="/Register"> <button >Join Now!</button></Link></div>
                </div>

                <div className='img-div'><img src={landing} width="650" /></div>



            </div>


        </section>

    )
}

export default LandingPage 