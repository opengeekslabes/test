import React, { useState } from 'react';
import './LogIn.css';
import {connect} from 'react-redux';
import actions from '../../redux/actions/autorisation/'
import {withRouter} from 'react-router-dom';

const ResetPassword: React.FC = (props: any) => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="login-container">
      <div className="login-block">
        <div>
          <div className="login-title">Forgot your password?</div>
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
            <div className="login-reset">
              <button
                type="button"
                className="form-button"
                onClick={() => props.reset({email})}>
                Reset
                        </button>
              <button
                type="button"
                className="form-button"
                onClick={() => props.history.push('/')}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  reset: (data: any) => dispatch(actions.resetPassword.reset(data)),
})

export default withRouter(connect(
   null,
   mapDispatchToProps
)(ResetPassword))

