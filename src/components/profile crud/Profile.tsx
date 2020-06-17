import React from 'react';
import './Profile.css';
import { logout } from '../../redux/actions/autorisation/Logout'
import { connect } from 'react-redux';
import firebase from 'firebase'
import rsf from '../../rsf/rsf'
import store from '../../redux/store/store'
import { call, put } from 'redux-saga/effects'
import { types } from '../../redux/actions/user/Username'
import { userReducer } from '../../redux/reducers/user/Username';

const Profile: React.FC = (props: any) => {
  console.log(props.userName.name)
  const user = firebase.auth().currentUser;
  console.log(user)
  
  return (
    <div className="profile-container">
      <h1>Hello, {props.userName.name}</h1>
      <button
        type="button"
        onClick={props.logout}>
          Log out
      </button>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    userName: state.userReducer
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

