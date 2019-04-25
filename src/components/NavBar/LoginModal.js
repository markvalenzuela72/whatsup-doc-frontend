import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Modal, TextInput, Button } from 'react-materialize';
import { loginRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
class LoginModal extends Component {
    state = {
        error: null,
        loggedin: null
    }
    updateVal = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await loginRequest({ email: this.state.email, password: this.state.password });
            saveUser(response);
            this.setState({
                loggedin: true
            })
            window.location.href = "/";
        } catch (e) {
            this.setState({
                error: e.email
            })
        }
    }

    render() {

        const loginTrigger = <Link to="/">Sign in</Link>
        return (
            <Modal className="login-modal" fixedFooter header="Sign In" trigger={loginTrigger}>
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
                    <form onSubmit={this.submitForm.bind(this)} className="col s12">
                        <div className="row">
                            <TextInput id="login-email" name="email" s={12} onChange={this.updateVal} label="Email" email validate />
                        </div>
                        <div className="row">
                            <TextInput id="login-password" name="password" s={12} onChange={this.updateVal} password label="Password" />
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <Button type="submit" waves="light" className="btn-large">
                                    Sign in
                            </Button>
                            </div>
                        </div>
                        <div className="row forgot-password">
                            <div className="col s12 center-align">
                                <Link to="/">Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 center-align">
                                Not a member yet?
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <Button type="submit" waves="light" className="btn-large">
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


export default LoginModal