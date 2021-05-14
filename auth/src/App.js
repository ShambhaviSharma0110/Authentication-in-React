
import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Student from './Components/Pages/Student';
import { Security, SecureRoute, LoginCallback} from "@okta/okta-react";
//import ImplicitCallback from './Components/Auth/ImplicitCallback';
import Login from './Components/Auth/Login';
function onAuthRequired({history})
{
history.push('/login');
}
class App extends Component  {
  render(){
  return (
    <div className="App">
      <Router>
        <Security
          issuer="dev-63270747.okta.com/oauth2/default"
          client_id="0oaqmwuos9yxmUxB45d6"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <Nav />
          <div class="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/student" exact={true} component={Student} />
            <Route
              path="/login"
              render={() => <Login baseUrl="dev-63270747.okta.com" />}
            />
            <Route path="/login/callback" component={LoginCallback} />
          </div>
        </Security>
      </Router>
    </div>
  );
  }
}

export default App;
