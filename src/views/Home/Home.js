import React from 'react';
import medicineIcon from '../../images/medicine.png';
import bookIcon from '../../images/book.png';
import directoryIcon from '../../images/location.png';
const Home = () => {
    return (
        <div id="Home">
            <div className="container">
                <div className="row center-align">
                    <h1 class="home-welcome">What’s up Doc?</h1>
                    <p><strong>Medical information you can trust.</strong></p>
                </div>
                <div class="row">
                    <div class="col s4 center">
                        <a href="">
                            <div class="center home-icon">
                                < img src={medicineIcon} />
                                <p class="home-caption">Pharmacy Directory</p>
                            </div>
                        </a>
                    </div>
                    <div class="col s4">
                        <a href="">
                            <div class="center home-icon">
                                < img src={bookIcon} />
                                <p class="home-caption">Pharmacy Directory</p>
                            </div>
                        </a>
                    </div>
                    <div class="col s4">
                        <a href="">
                            <div class="center home-icon">
                                < img src={directoryIcon} />
                                <p class="home-caption">Pharmacy Directory</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
