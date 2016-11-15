import React from 'react';
import ReactDOM from 'react-dom';
import ResultCity from './components/resultcity';
import ResultHome from './components/resulthome';
import Navbar from './components/navbar'
import About from './components/about';
import editprofile from './components/editprofile'
import profile from './components/profile'
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router'

class ResultPage extends React.Component {
	render() {
		return (
				<Navbar />
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
          	<li><Link to="/cities">cities</Link></li>
          	</div>
		)
	}
}

ReactDOM.render((
  <Router history={hashHistory}>
      {/* make them children of `App` */}
      <Route path="/" component={App}/>
      <Route path="/cities" component={ResultCity}/>
      <Route path="/cities/:city" component={ResultHome}/>
			<Route path="/about" component={About}/>
			<Route path ='/editprofile' component={editprofile}/>
			<Route path ='/profile' component={profile}/>
  </Router>
  ),document.getElementById('app')
);
