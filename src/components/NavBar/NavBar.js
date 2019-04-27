import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/panda-logo.png';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import { userLogout, isLoggedIn, userInfo } from '../../helpers/authentication';
import M from 'materialize-css';
import { Dropdown } from 'react-materialize';
class NavBar extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        const wbSidebarOptions = {
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        }
        const elem = document.querySelector('#wdmob-nav');
        M.Sidenav.init(elem, wbSidebarOptions);
    }
    logout = (e) => {
        userLogout();
        window.location.href = "/";
    }
    render() {
        const myAccountDropDown = <li><NavLink to=''>My Account<i className="material-icons right">arrow_drop_down</i></NavLink></li>
        const dropdownOption = {
            coverTrigger: false,
            alignment: 'right' // Displays dropdown with edge aligned to the left of button
        }

        const LoginNav = () => {
            if (isLoggedIn()) {
                const full_name = userInfo().full_name;
                return <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/home"><i className="material-icons right">home</i></NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    <Dropdown options={dropdownOption} trigger={myAccountDropDown} className="collection">
                        <div className="collection-item avatar">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/618AgkLAUdL._SY355_.jpg" alt="" className="circle" />
                            <span className="title">Sign in as</span>
                            <p>{full_name}</p>
                        </div>
                        <NavLink to="/dashboard"> Dashboard </NavLink>
                        <NavLink to="/" onClick={this.logout}>Logout</NavLink>
                    </Dropdown>
                </ul>
            } else {
                return <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/home"><i className="material-icons right">home</i></NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    <li><LoginModal /></li>
                    <li><SignupModal /></li>
                </ul>
            }
        }
        const MobileNav = () => {
            if (isLoggedIn()) {
                const full_name = userInfo().full_name;
                return <ul className="sidenav" id="wdmob-nav">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    <Dropdown options={dropdownOption} trigger={myAccountDropDown} className="collection">
                        <div className="collection-item avatar">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/618AgkLAUdL._SY355_.jpg" alt="" className="circle" />
                            <span className="title">Sign in as</span>
                            <p>{full_name}</p>
                        </div>
                        <NavLink to="/" onClick={this.logout}>Logout</NavLink>
                    </Dropdown>
                </ul>
            } else{
                return <ul className="sidenav" id="wdmob-nav">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contactus">Contact Us</NavLink></li>
                <li><LoginModal /></li>
                <li><SignupModal /></li>
            </ul>
            }
        }
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <NavLink to="/" className="brand-logo"><img src={logo} alt="" /></NavLink>
                        <NavLink to="/" data-target="wdmob-nav" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
                        <LoginNav />
                    </div >
                </nav>
                <MobileNav />
            </div>

        )

    }
}
export default NavBar;