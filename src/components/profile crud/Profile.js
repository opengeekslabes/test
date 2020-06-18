import React, {useState} from 'react';
import './Profile.css';
import { logout } from '../../redux/actions/autorisation/Logout'
import { connect } from 'react-redux';
import firebase from 'firebase'
import rsf from '../../rsf/rsf'
import store from '../../redux/store/store'
import { call, put } from 'redux-saga/effects'
import { userName } from '../../redux/actions/user/Username'
import { userReducer } from '../../redux/reducers/user/Username';

const Profile = (props) => {
  const [email, setEmail] = useState(props.user.email);

  //const user = firebase.auth().currentUser;
  console.log(userName(email))
  return (
    <div className="profile-container">
      <h1>Hello, {props.user.user}</h1>
      <button
        type="button"
        onClick={props.logout}>
          Log out
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      user: state.userReducer
  };
};

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

