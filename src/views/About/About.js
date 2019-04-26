import React, { Component } from 'react';
import about from '../../images/about.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div id="aboutsection">
                    <div className="container d-flex h-100 flex-row align-items-center">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                        <img src={about} alt="" width="100%" height="100%" />
                        </div>
                        <div className="col-md-6 mx-auto">
                        <h1 className="text-uppercase">About Us</h1>
                        <p>
                            Whatsup Doc is UAE’s first telehealth service. Our network offers highly experience license physician from the best hospitals and clinics nationwide.
                        </p>
                        <h2>History</h2>
                        <p> The company was formed in 2019 as part Astrolabs Coding Bootcamp by the group members of White Panda</p>
                        </div>
                    </div>
                    </div>
                </div>               
            </div>

        )
    }
};

export default About;