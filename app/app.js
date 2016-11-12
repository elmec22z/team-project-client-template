import React from 'react';
import ReactDOM from 'react-dom';
import ResultCity from './components/resultcity';
import ResultHome from './components/resulthome';
import Navbar from './components/navbar'
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
  </Router>
  ),document.getElementById('app')
);