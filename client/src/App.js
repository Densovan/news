import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Layouts/Navbar';
import Subnavbar from './components/Layouts/Subnavbar';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>

      {/* <Navbar />
      <Subnavbar /> */}
    </React.Fragment>
  );
}

export default App;
