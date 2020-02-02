import React from "react";
import NavBar from "./components/navBar/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/protectedPages/Profile";
import history from "./utils/History";
import PrivateRoute from "./components/protectedPages/PrivateRoute";
import ExternalApi from './components/ExternalApi'
import Home from './components/lakes/LakeHome'
import Login from './components/userForms/Login'
import SignUp from './components/userForms/SignUp'

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={Login}/>
          {/* <Route path="/profile" component={Profile} /> */}
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;