import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Modal, TextInput, Button } from 'react-materialize';
import { registerRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
class LoginModal extends Component {
    render() {
        const loginTrigger = <Link to="/">Sign in</Link>
        return (
            <Modal className="login-modal" fixedFooter header="Sign In" trigger={loginTrigger}>
                {/* {this.state.isregister ? <Redirect to="/success/"/> : null} */}
                <div className="row">
                    <form onSubmit={this.submitForm} className="col s12">
                        <div className="row">
                            <TextInput name="email" s={12} onChange={this.updateVal} label="Email" email validate />
                        </div>
                        <div className="row">
                            <TextInput name="password" s={12} onChange={this.updateVal} password label="Password" />
                        </div>
                        <div className="row">
                            <div class="col s12">
                                <Button type="submit" waves="light" className="btn-large">
                                    Sign in
                            </Button>
                            </div>
                        </div>
                        <div className="row forgot-password">
                            <div class="col s12 center-align">
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