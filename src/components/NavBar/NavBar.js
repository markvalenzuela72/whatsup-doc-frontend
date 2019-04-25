import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/panda-logo.png';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import { userLogout, isLoggedIn, userInfo } from '../../helpers/authentication';
import 'materialize-css';
import { Dropdown, Divider } from 'react-materialize';
class NavBar extends Component {
    logout = (e) => {
        userLogout();
        window.location.href = "/";
    }

    render() {
        const LoginNav = () => {
            if (isLoggedIn()) {
                const dropdownOption = {
                    coverTrigger: false,
                    alignment: 'right' // Displays dropdown with edge aligned to the left of button
                }
                
                const myAccountDropDown = <li><Link to="">My Account<i class="material-icons right">arrow_drop_down</i></Link></li>

                const full_name =  userInfo().full_name;

                return <ul id="nav-mobile" className="right hide-on-med-and-down" >
                    <li><Link to="/home"><i className="material-icons right">home</i></Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <Dropdown options={dropdownOption} trigger={myAccountDropDown} className="collection">
                        <div class="collection-item avatar">
                            <img src="http://materializecss.com/images/yuna.jpg" alt="" class="circle" />
                            <span class="title">Sign in as</span>
                            <p>{full_name}</p>
                        </div>
                        <Divider />
                        <a onClick={this.logout}>Logout</a>
                    </Dropdown>
                    {/* <li><Link className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></Link></li> */}
                    {/* <li><Link to="/" onClick={this.logout} className="waves-effect waves-light btn red white hoverable">Logout</Link></li> */}
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