import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
import './Autorisation.css';
=======
import './LogIn.css';
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
import {connect} from 'react-redux';
import actions from '../../redux/actions/autorisation/'
import {withRouter} from 'react-router-dom';

const SignUp: React.FC = (props: any) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const isInvalid =
        password !== confirmPassword ||
        password === '' ||
        email === '' ||
        name === '';

    return (
        <div className="login-container">
            <div className="login-signup">Already have an account? <span onClick={() => props.history.push('/login')}>Log In</span>
            </div>
            <div className="login-block">
                <div>
                    <div className="login-title">Sign Up</div>
                    <form className="login-form">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            required
                            name="name"
                            id="name"
                            type="text"
                            value={name}
                            className="form-input"
                            placeholder="Voland"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            required
                            name="email"
                            id="email"
                            type="email"
                            autoComplete="username"
                            value={email}
                            className="form-input"
                            placeholder="ramona.lowe@example.com"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            required
                            name="password"
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            className="form-input"
                            placeholder="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <input
                            required
                            name="confirm-password"
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            className="form-input"
                            placeholder="password"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }}
                        />
                        <div className="login-reset">
                            <button
                                type="button"
                                className="form-button"
                                onClick={() => {
                                    !isInvalid ? props.signup({email, password, name}) : console.log('error');
                                }}>
                                Sign Up Now
                            </button>
                            <div onClick={() => props.history.push('/reset')}>Forgot your Password?</div>
                        </div>
                        <div className="login-center">
                            or
<<<<<<< HEAD
                            <div>Log In with: <i className="social-login-button fab fa-facebook fa-2x" onClick={props.loginFB}></i> <i
                                className="social-login-button fab fa-google-plus fa-2x" onClick={props.loginGoogle}></i></div>
=======
                            <div>Log In with: <i className="fab fa-facebook fa-2x" onClick={props.loginFB}></i> <i
                                className="fab fa-google-plus fa-2x" onClick={props.loginGoogle}></i></div>
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
   refreshUserData: () => dispatch(actions.userActions.refreshUserData()),
   signup: (data: any) => dispatch(actions.signUp.signup(data)),
   loginGoogle: () => dispatch(actions.logInGoogle.loginGoogle()),
   loginFB: () => dispatch(actions.logInFB.loginFB()),
})

export default withRouter(connect(
    null,
    mapDispatchToProps
)(SignUp))