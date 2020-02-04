import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const url = "https://files.slack.com/files-pri/T4JUEB3ME-FTGH8E7RB/18771.jpg"
// const url = "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"


const LandingPage = () => {
    return (
        <section className='landing-page'>
            <div className='content-div'>
                <div>
                    <h1 className="animated fadeInDownBig" >Welcome to your Quickhire Community</h1>
                </div>
                <div >
                    <p className='animated flipInX'>You just finish your Bootcamp ans want to find a job</p>
                    <p className='animated flipInX'> Join us in Quickhire and we will help you </p>
                    <p className='animated flipInX'> find the tech job that best matches you</p>
                </div>
                <div>
                <div className='animated fadeInLeft'><Link to="/Register"> <button>Join Now!</button></Link></div>
            
                <div className='animated fadeInRight img-div'>
                <img src={url} />
                </div>
                </div>


            </div>


        </section>

    )
}
document.querySelector("#root > div > div._loading_overlay_wrapper.css-79elbk.sc-AykKF.jiqULI")
export default LandingPage 