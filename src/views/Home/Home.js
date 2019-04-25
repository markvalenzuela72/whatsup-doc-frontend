import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import medicineIcon from '../../images/medicine.png';
import bookIcon from '../../images/book.png';
import directoryIcon from '../../images/location.png';
class Home extends Component {
    render() {
        return (
            <div id="Home" >
                <div className="container">
                    <div className="row center-align home-welcome">
                        <h1>What’s up Doc?</h1>
                        <p><strong>Medical information you can trust.</strong></p>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 center home-icon-container">
                            <Link to="/">
                                <div className="center home-icon hoverable">
                                    < img src={medicineIcon} alt="" />
                                    <p className="home-caption">Pharmacy<br />Directory</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col s12 m4  home-icon-container">
                            <Link to="/">
                                <div className="center home-icon hoverable">
                                    < img src={bookIcon} alt="" />
                                    <p className="home-caption">General<br />Health</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col s12 m4 home-icon-container">
                            <Link to="/">
                                <div className="center home-icon hoverable ">
                                    < img src={directoryIcon} alt="" />
                                    <p className="home-caption">Physician<br />Directory</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
