import React from 'react';
import './dashboard.css';
import profile from '../../images/profile_blank.jpeg';
import appoinment_img  from '../../images/appointment.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import {userInfo} from '../../helpers/authentication';

const Dashboard = () => {
  const full_name = userInfo().full_name;
  return <div className="container">
    <div className="row">
      <div className="col-md-4 mt-3" id="dash-info">
          <div id="dash-title">
            <h2> Dashboard </h2>
          </div>
          <div className="profile_img d-flex justify-content-center mt-3">
            <img src={profile} alt="" width="100px" height="100px" />
          </div>
          <div className="mt-2 d-flex justify-content-center" id="dash-name">
            <p> {full_name} </p>
          </div>
          <div className="mt-3" id="dash-menu">
            <ul>
              <li id="profile-menu">
                <Link to="/"> <span> <i class="far fa-user-circle"></i> </span> Profile </Link> 
              </li>
              <li id="genhealth-menu">
              <Link to="/"><span> <i class="fas fa-book"></i> </span> General Health
              </Link>
              </li>
              <li id="physdir-menu">
              <Link to="/">
              <span> <i class="fas fa-map-marker-alt"></i> </span>  Physician Directory
              </Link>
              </li>
              <li id="transhist-menu">
              <Link to="/">
              <span> <i class="fas fa-history"></i> </span>   Transaction History
              </Link>
              </li>
              <li id="accountsetting-menu">
              <Link to="/">
              <span> <i class="fas fa-cog"></i> </span> Account Setting
              </Link>
              </li>
            </ul>
          </div>
      </div>
      <div className="col-md-8 mt-3" id="dash-details">
            <div id="appointment-title">
              <h2> Appointments </h2>
            </div>
            <div className="card w-50" id="appointment1">
              <img className="card-img-top" src={appoinment_img} alt="" height="150px" />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Thursday, March 21, 2019</li>
                <li class="list-group-item"> <i class="far fa-user-circle"></i>  Dr. John Doe</li>
              </ul>
            </div>
      </div>
    </div>
  </div>
}

export default Dashboard;