import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Modal, TextInput, Button } from 'react-materialize';
import { registerRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';

class SignupModal extends Component {
  state = {
    error: null,
    loggedin: null,
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
      saveUser(response);
      this.setState({
        loggedin: true,
        isregister: true
      })
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
        {this.state.isregister ? <Redirect to="/success/" /> : null}
        <div className="row">
          <form onSubmit={this.submitForm} className="col s12">
            <div className="row">
              <TextInput name="first_name" s={12} type="text" onChange={this.updateVal} label="First Name" />
            </div>
            <div className="row">
              <TextInput name="last_name" s={12} onChange={this.updateVal} label="Last Name" />
            </div>
            <div className="row">
              <TextInput name="email" s={12} onChange={this.updateVal} label="Email" email validate />
            </div>
            <div className="row">
              <TextInput name="password" s={12} onChange={this.updateVal} password label="Password" />
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
