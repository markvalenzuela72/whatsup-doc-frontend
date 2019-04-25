import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Modal, TextInput, Button } from 'react-materialize';
import { registerRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
import M from 'materialize-css';

class SignupModal extends Component {
  state = {
    error: null,
    isregister: null
  }
  updateVal = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitForm = async (e) => {
    e.preventDefault();
    this.setState({
      error: null
    })
      
    try {
      let response = await registerRequest({ firstname: this.state.first_name, lastname: this.state.last_name, email: this.state.email, password: this.state.password });
      console.log(response);
      saveUser(response);
      this.setState({
        isregister: true
      })
      const elem = document.querySelector('.login-modal')
      const instance = M.Modal.getInstance(elem);
      return instance.open();
    } catch (e) {
      this.setState({
        error: e.email
      })
    }
  }
  
  render() {

    const signupTrigger = <Link to="/" className="waves-effect waves-light btn white hoverable">Create Account</Link>
    return (
      <Modal className="signup-modal" fixedFooter header="Sign Up" trigger={signupTrigger}>
        {this.state.error ?
          <div class="row">
            <div class="col s12">
              <div class="card red darken-1 z-depth-3">
                <div class="card-content white-text">
                  <p> {this.state.error}</p>
                </div>
              </div>
            </div>
          </div>
          : null}
        <div className="row">
          <form onSubmit={this.submitForm} className="col s12">
            <div className="row">
              <TextInput name="first_name" s={12} type="text" onChange={this.updateVal} label="First Name" />
            </div>
            <div className="row">
              <TextInput name="last_name" s={12} onChange={this.updateVal} label="Last Name" />
            </div>
            <div className="row">
              <TextInput name="email" id="signup-email" s={12} onChange={this.updateVal} label="Email" email validate />
            </div>
            <div className="row">
              <TextInput name="password" id="signup-password" s={12} onChange={this.updateVal} password label="Password" />
            </div>
            <div className="row">
              <TextInput name="Confirmpassword" s={12} id="confirmPassword" onChange={this.updateVal} password label="Confirm Password" />
            </div>
            <div className="row">
              <div className="col s12">
                <Button type="submit" waves="light" large>
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>

      </Modal>

    )
  }
}
export default SignupModal
