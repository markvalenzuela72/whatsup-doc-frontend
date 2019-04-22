import React from 'react';
import 'materialize-css';
import { Modal} from 'react-materialize';

const SignupModal = () => {
    const signupTrigger = <a href="#modal1" className="waves-effect waves-light btn white hoverable">Sign Up</a>
    return (
        <Modal header="Modal Header" trigger={signupTrigger}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
    </Modal>
    )
}
export {SignupModal}
