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
import Newspage from './components/NewsPage/Newspage'
import NewsAticle from './components/NewsPage/NewsAticle'
import HomeJobs from './components/Jobs/HomeJobs';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/news" exact={true} component={Newspage} />
          <Route path="/news/:_id" component={NewsAticle} />
          <Route path="/jobs" component={HomeJobs} />


        </Switch>
      </Router>

      {/* <Navbar />
      <Subnavbar /> */}
    </React.Fragment>
  );
}

export default App;
