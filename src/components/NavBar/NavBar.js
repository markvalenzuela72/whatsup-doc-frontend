import React from 'react';
import logo from '../../images/panda-logo.png';
import 'materialize-css';
import  SignupModal  from './SignupModal';
import  LoginModal  from './LoginModal';
const NavBar = () => {
   
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo "><img className="responsive-img" src={logo} alt=""/></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/home"><i className="material-icons right">home</i></a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><LoginModal/></li>
                        <li>
                           <SignupModal />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;