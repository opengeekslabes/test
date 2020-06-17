import React, { useState  } from 'react';
import './LogIn.css';
import { loginGoogle } from '../../redux/actions/autorisation/LogInGoogle'
import { loginFB } from '../../redux/actions/autorisation/LogInFB'
import { login } from '../../redux/actions/autorisation/Login'
import { connect } from 'react-redux';
import { history } from '../App'

const LogIn: React.FC = (props: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="login-container">
        <div className="login-signup">Don’t have an account? <span onClick={() => history.push('/')}>Sign Up</span></div>
        <div className="login-block">
          <div>
              <div className="login-title">Log in</div>
              <form className="login-form">
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
                  <div className="login-reset">
                      <button
                          type="button"
                          className="form-button"
                          onClick={() => props.login(email, password)}
                      >
                          Log In Now
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
  loginGoogle,
  loginFB,
  login
}

export default connect(
  null,
  mapDispatchToProps,
  )(LogIn)