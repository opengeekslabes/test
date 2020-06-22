import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { connect } from 'react-redux';

const Navigation = (props) => {
  return (
    <div className="col-2 nav">
      <div className="nav-item">Posts</div>
      <div className="nav-item">Calendar</div>
      <div className="nav-item">Statistic</div>
      <div className="nav-item">Archieve</div>
    </div>
  );
}


export default connect(
  null,
  null
)(Navigation)

