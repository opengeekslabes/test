import React, {useState} from 'react';
import './Profile.css';
import { logout } from '../../redux/actions/autorisation/Logout'
import { connect } from 'react-redux';
import Navigation from './Navigation'
import Main from './Main'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <h1>Hello, {props.name.name} </h1>
      <button
        type="button"
        className="form-button"
        onClick={props.logout}>
          Log out
      </button>
      <div className="container m-0 p-0">
        <div className="row">
          <Navigation />
          <Main />
        </div>
      </div>
      

    </div>
  );
}

const mapStateToProps = state => {
  return {
      name: state.userReducer
  };
};

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

