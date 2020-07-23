import React from 'react';
<<<<<<< HEAD
import '../components/main/Profile.css'
import SignUp from './autorisation/SignUp'
import LogIn from './autorisation/LogIn'
import MainBlock from './main/containers/MainBlock'
import ResetPassword from './autorisation/ResetPassword'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PublicRoute from "./main/Routes/PublicRoute";
import PrivateRoute from "./main/Routes/PrivateRoute";

function App() {
  return (
    <div className="app">
=======
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
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={SignUp} />
            <PublicRoute exact path="/login" component={LogIn} />
            <PublicRoute exact path="/reset" component={ResetPassword}/>
<<<<<<< HEAD
            <PrivateRoute path="/home" component={MainBlock} />
=======
            <PrivateRoute path="/home" component={Container} />
>>>>>>> 2e24a8e729bd27a93245c5b0d7f745e211ccada3
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}


export default App;
