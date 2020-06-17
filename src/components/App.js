import React from 'react';
import './App.css';
import SignUp from './autorisation/SignUp'
import LogIn from './autorisation/LogIn'
import Profile from './profile crud/Profile'
import ResetPassword from './autorisation/ResetPassword'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

export const history = syncHistoryWithStore(browserHistory, store)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={SignUp}/>
          <Route path="login" component={LogIn}/>
          <Route path="reset" component={ResetPassword}/>
          <Route path="profile" component={Profile}/>
        </Router>
      </Provider>
    </div>
  );
}


export default App;
