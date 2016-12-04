import React from 'react';
import ReactDOM from 'react-dom';
import ResultCity from './components/resultcity';
import ResultHome from './components/resulthome';
import Navbar from './components/navbar';
import About from './components/about';
import login from './components/login';
import splash from './components/splash';
import Forum from './components/forum';
import editprofile from './components/editprofile'
import profile from './components/profile'
import ErrorBanner from './components/errorbanner'
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router'


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ErrorBanner />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
      {/* make them children of `App` */}
      <Route path="/" component={splash}/>
      <Route path="/cities" component={ResultCity}/>
      <Route path="/cities/:city" component={ResultHome}/>
			<Route path="/about" component={About}/>
			<Route path ='/profile' component={profile}/>
			<Route path ='/editprofile' component={editprofile}/>
      <Route path ='/profile' component={profile}/>
      <Route path='/forum' component={Forum}/>
			<Route path ='/login' component={login} />
      <Route path ='/resulthome' component={ResultHome} />
  </Router>
  ),document.getElementById('app')
);
