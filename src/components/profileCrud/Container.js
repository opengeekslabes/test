import React from 'react';
import Navigation from './Navigation'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts'
import Calendar from './Calendar'



const Container = (props) => {

  return (
    <div className="profile-container">
      <div className="container-fluid">
        <div className="row container-height">
          <Navigation />
          <Switch>
            <Route path="/home/posts/" component={Posts} />
            <Route path="/home/calendar" component={Calendar} />
          </Switch>
        </div>
      </div>
    </div>
  );
}


export default Container

