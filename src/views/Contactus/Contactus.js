import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Contactus.css';

class Contact extends Component {
    render() {
        return (
            <div>
          
                <div id="contactsection">
                    <div className="container d-flex h-100 flex-column justify-content-center align-items-center">
                        <h1 id="contactus">Contact Us</h1>
                        <form id="contactForm">
                            <div className="form-group">
                                <label htmlFor="nameInput">Name</label>
                                <input type="text" className="form-control" id="nameInput" placeholder="Enter name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input type="email" className="form-control" id="emailInput" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="messageInput">Message</label>
                                <textarea className="form-control" name="message" id="messageInput" cols={30} rows={5} required defaultValue={""} />
                            </div>
                            <Link type="submit" className="btn btn-info btn-block">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }     
}
    
    

export default Contact;