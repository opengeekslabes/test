import React from 'react';
import Navigation from '../Navigation'
import { Route, Switch } from 'react-router-dom'
import CenterBlock from './CenterBlock'
import MyCalendar from '../Calendar'
import LinkAccounts from '../LinkAccounts'

const MainBlock = () => {

  return (
    <div className="profile-container">
      <div className="container-fluid">
        <div className="row container-height">
          <Navigation />
          <Switch>
            <Route path="/home/posts/" component={CenterBlock} />
            <Route path="/home/calendar" component={MyCalendar} />
            <Route path="/home/link-accounts" component={LinkAccounts} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default MainBlock

