import React from 'react';
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
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={SignUp} />
            <PublicRoute exact path="/login" component={LogIn} />
            <PublicRoute exact path="/reset" component={ResetPassword}/>
            <PrivateRoute path="/home" component={MainBlock} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}


export default App;
