import React from "react";
import { Link } from "react-router-dom";
import landing from '../../images/landing.png'




//QuickHire homepage - will render when you first visit site
const LandingPage = () => {
    return (
        <section className='landing-page'>
            <div className='content-div'>
                <div>
                    <h1 >Welcome to your Job</h1>
                    <h1>Funnel Community</h1>
                </div>
                <div className='bottom-content'>
                    <div className='text'>
                        <p>You just finished your Bootcamp and want to find a job.</p>
                        <p>Join us in job funnel and we will help you to find your</p>
                        <p>match!</p>
                    </div>

                </div>
                <div className='img-div'><img src={landing} width="650" /></div>
            </div>



        </section>

    )
}

export default LandingPage 