import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/panda-logo.png';
import 'materialize-css';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import { userLogout, isLoggedIn, userInfo } from '../../helpers/authentication';
class NavBar extends Component {
    logout = (e) => {
        userLogout();
        window.location.href = "/";
      }
    
    render() {
        const LoginNav = () => {
            if(isLoggedIn()) {
                return <ul id="nav-mobile" className="right hide-on-med-and-down" >
                    <li><Link to="/home"><i className="material-icons right">home</i></Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/" onClick={this.logout} className="waves-effect waves-light btn red white hoverable">Logout</Link></li>
                </ul >
            } else {
                return <ul id="nav-mobile" className="right hide-on-med-and-down" >
                    <li><Link to="/home"><i className="material-icons right">home</i></Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><LoginModal /></li>
                    <li><SignupModal /></li>
                </ul>
            }
        }

        return (
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo "><img className="responsive-img" src={logo} alt="" /></a>
                        <LoginNav />
                    </div>
                </div>
            </nav>
        )

    }
}
export default NavBar;