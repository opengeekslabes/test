import React from 'react';
import './App.css';
import SignUp from './autorisation/SignUp'
import LogIn from './autorisation/LogIn'
import Container from './profileCrud/Container'
import ResetPassword from './autorisation/ResetPassword'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={SignUp} />
            <PublicRoute exact path="/login" component={LogIn} />
            <PublicRoute exact path="/reset" component={ResetPassword}/>
            <PrivateRoute path="/home" component={Container} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}


export default App;
