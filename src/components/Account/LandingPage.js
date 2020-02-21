import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.jpg'



//QuickHire homepage - will render when you first visit site
const LandingPage = () => {
    return (
        <section className='animated zoomInUp fast landing-page'>
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
                    <div className='img-div'><img src={logo} /></div>
                </div>

            </div>


        </section>

    )
}

export default LandingPage 