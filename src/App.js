import React from "react";
import "./assets/css/all.css"
import "./assets/css/style.css"
import "./assets/css/media.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/Home';
import EventPage from './pages/Event';
import CreatePage from './pages/Create';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/event" component={EventPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};


export default App;
