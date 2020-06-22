import React, { useState  } from 'react';
import './LogIn.css';
import { history } from '../App'
import { connect } from 'react-redux';
import { loginGoogle } from '../../redux/actions/autorisation/LogInGoogle'
import { loginFB } from '../../redux/actions/autorisation/LogInFB'
import { signup } from '../../redux/actions/autorisation/SignUp'

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
          <div className="login-signup">Already have an account? <span onClick={() => history.push('login')}>Log In</span></div>
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
                        onChange={(e) => { setName(e.target.value) }}
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
                        onChange={(e) => { setEmail(e.target.value) }}
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
                        onChange={(e) => { setPassword(e.target.value)}}
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
                        onChange={(e) => { setConfirmPassword(e.target.value)}}
                    />
                    <div className="login-reset">
                        <button
                            type="button"
                            className="form-button"
                            onClick={() => {!isInvalid ? props.signup(email, password, name) : console.log('error');
                            }}>
                            Sign Up Now
                        </button>
                        <div onClick={() => history.push('reset')}>Forgot your Password?</div>
                    </div>    
                    <div className="login-center">
                        or
                        <div>Log In with: <i className="fab fa-facebook fa-2x" onClick={props.loginFB}></i> <i className="fab fa-google-plus fa-2x" onClick={props.loginGoogle}></i></div>
                    </div>
                </form>
            </div>
          </div>
      </div>
    );
};

const mapDispatchToProps = {
  signup,
  loginGoogle,
  loginFB
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp)