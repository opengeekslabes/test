import React from 'react';
import './Profile.css';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div className="col-2 nav">
      <div className="nav-item" onClick={() => props.history.push('/home/posts/create-post')}>Posts</div>
      <div className="nav-item" onClick={() => props.history.push('/home/calendar')}>Calendar</div>
      <div className="nav-item">Statistic</div>
      <div className="nav-item">Archieve</div>
    </div>
  );
}


export default withRouter(Navigation)

