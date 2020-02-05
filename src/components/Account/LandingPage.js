import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const url = "https://files.slack.com/files-pri/T4JUEB3ME-FTGH8E7RB/18771.jpg"
const url = "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"


const LandingPage = () => {
    return (
        <section className='animated lightSpeedIn faster landing-page'>
            <div className='content-div'>
                <div>
                    <h1 >Welcome to your Quickhire Community</h1>
                </div>
                <div className='p-div' >
                    <p className='p-1'>You just finish your Bootcamp ans want to find a job</p>
                    <p className='p-2'> Join us in Quickhire and we will help you </p>
                    <p className='p-3'> find the tech job that best matches you</p>
                </div>


                <div className='bottom-content'>
                    <div className='animated pulse delay-2s slow button-div'><Link to="/Register"> <button >Join Now!</button></Link></div>
                    <div className='img-div'><img src={url} /></div>
                </div>

            </div>


        </section>

    )
}

export default LandingPage 