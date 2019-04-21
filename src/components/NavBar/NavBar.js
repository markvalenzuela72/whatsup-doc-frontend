import React from 'react';
import logo from '../../images/panda-logo.png';
import 'materialize-css/dist/css/materialize.min.css';

const NavBar = () => {
    return (
        <nav>
            <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo "><img className="responsive-img" src={logo} /></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/home"><i class="material-icons right">home</i></a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/signin">Sign in</a></li>
                    <li><a  href="/signup" class="waves-effect waves-light btn white">Sign Up</a></li>
                </ul>
            </div>
            </div>
        </nav>

    )
}
export default NavBar;