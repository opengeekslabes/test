import React, { useState  } from 'react';
<<<<<<< HEAD
import './Autorisation.css';
=======
import './LogIn.css';
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
import actions from '../../redux/actions/autorisation/'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LogIn: React.FC = (props: any) => {
  const [email, setEmail] = useState<string>("user@user.user1");
  const [password, setPassword] = useState<string>("user@user.user1");

  return (
    <div className="login-container">
        <div className="login-signup">Don’t have an account? <span onClick={() => props.history.push('/')}>Sign Up</span></div>
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
                          onClick={() => {
<<<<<<< HEAD
=======
                            console.log(props.login)
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
                            props.login({email, password})}}
                      >
                          Log In Now
                      </button>
                      <div onClick={() => props.history.push('reset')}>Forgot your Password?</div>
                  </div>    
                  <div className="login-center">
                      or
<<<<<<< HEAD
                      <div>Log In with: <i className="social-login-button fab fa-facebook fa-2x" onClick={props.loginFB}></i> <i className="social-login-button fab fa-google-plus fa-2x" onClick={props.loginGoogle}></i></div>
=======
                      <div>Log In with: <i className="fab fa-facebook fa-2x" onClick={props.loginFB}></i> <i className="fab fa-google-plus fa-2x" onClick={props.loginGoogle}></i></div>
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
                  </div>
              </form>
          </div>
        </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch: any) => ({
  login: (data: any) => dispatch(actions.login.login(data)),
  loginGoogle: () => dispatch(actions.logInGoogle.loginGoogle()),
  loginFB: () => dispatch(actions.logInFB.loginFB()),
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
    )(LogIn)
)