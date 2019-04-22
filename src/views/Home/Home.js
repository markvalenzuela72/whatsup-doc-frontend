import React from 'react';
import medicineIcon from '../../images/medicine.png';
import bookIcon from '../../images/book.png';
import directoryIcon from '../../images/location.png';
const Home = () => {
    return (
        <div id="Home">
            <div className="container">
                <div className="row center-align home-welcome">
                    <h1>What’s up Doc?</h1>
                    <p><strong>Medical information you can trust.</strong></p>
                </div>
                <div className="row">
                    <div className="col s12 m4 center home-icon-container">
                        <a href="">
                            <div className="center home-icon hoverable">
                                < img src={medicineIcon} />
                                <p className="home-caption">Pharmacy<br/>Directory</p>
                            </div>
                        </a>
                    </div>
                    <div className="col s12 m4  home-icon-container">
                        <a href="">
                            <div className="center home-icon hoverable">
                                < img src={bookIcon} />
                                <p className="home-caption">General<br/>Health</p>
                            </div>
                        </a>
                    </div>
                    <div className="col s12 m4 home-icon-container">
                        <a href="">
                            <div className="center home-icon hoverable ">
                                < img src={directoryIcon} />
                                <p className="home-caption">Physician<br/>Directory</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
