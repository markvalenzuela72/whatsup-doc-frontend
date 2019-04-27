import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import medicineIcon from '../../images/medicine.png';
// import bookIcon from '../../images/book.png';
// import directoryIcon from '../../images/location.png';

import pharmacydir from '../../images/pharmacydir.jpg';
import generalhealth from '../../images/generalhealth.jpg';
import physiciandir from '../../images/physiciandir.jpg';


class Home extends Component {
    render() {
        return (
            <div id="Home" >

        <div className="mx-auto text-center mt-5 pt-5">
            <h1 className="mx-auto my-0" id="headertext">What's Up, Doc?</h1>
            <h2 className="mx-auto mt-2 mb-5 text-secondary" id="subheadertext">Medical information you can trust.</h2>

        <div id="homeMenu">
        <a className="homeOptions" href><img src={pharmacydir} alt="pharmacy-dictionary" /> </a> 
            <a className="homeOptions" href><img src={generalhealth} alt="general-health" /></a>
            <a className="homeOptions" href><img src={physiciandir} alt="physician-directory" /></a>
        </div>
        </div>

            </div>
        )
    }
};

export default Home;
