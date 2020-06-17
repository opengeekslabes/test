import React, { useState  } from 'react';
import './LogIn.css';
import { reset } from '../../redux/actions/autorisation/ResetPassword'
import { history } from '../App'
import { connect } from 'react-redux';

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
                            onClick={() => props.reset(email)}>
                            Reset
                        </button>
                        <button
                            type="button"
                            className="form-button"
                            onClick={() => history.push('/')}>
                            Back
                        </button>
                    </div>    
                </form>
            </div>
          </div>
      </div>
    );
};

const mapDispatchToProps = {
  reset,
}

export default connect(
  null,
  mapDispatchToProps
)(ResetPassword)