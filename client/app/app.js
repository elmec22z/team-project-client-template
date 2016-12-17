import React from 'react';
import ReactDOM from 'react-dom';
import ResultCity from './components/resultcity';
import ResultHome from './components/resulthome';
//import Navbar from './components/navbar';
import About from './components/about';
import login from './components/login';
import splash from './components/splash';
import Forum from './components/forum';
import ForumHome from './components/forumhome';
import editprofile from './components/editprofile'
import host from './components/host'
import profile from './components/profile'
import ErrorBanner from './components/errorbanner'
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
      {/* make them children of `App` */}
      <Route path="/" component={splash}/>
      <Route path ="/profile" component={profile}/>
      <Route path="/cities" component={ResultCity}/>
      <Route path="/cities/:city" component={ResultHome}/>
			<Route path="/about" component={About}/>
			<Route path ='/editprofile' component={editprofile}/>
      <Route path="/forum" component={Forum}/>
      <Route path="/forumhome" component={ForumHome}/>
			<Route path ='/login' component={login} />
      <Route path ='/resulthome' component={ResultHome} />
        <Route path ='/host' component={host} />
  </Router>
  ),document.getElementById('app')
);
