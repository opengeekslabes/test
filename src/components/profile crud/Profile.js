import React, {useState} from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import Navigation from './Navigation'
import Main from './Main'
import PostBlock from './PostBlock'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="container-fluid">
        <div className="row container-height">
          <Navigation />
          <Main />
          <PostBlock />
        </div>
      </div>
    </div>
  );
}


export default Profile

