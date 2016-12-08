import React from 'react';
import { Link } from 'react-router';
//import {getProfileData} from '../server';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: ''
    }
  }

  handleChange(e) {
    this.setState({'cityName': e.target.value});
  }

  sendSearch() {
    if (this.state['cityName'] !== '') return {'cityName': this.state['cityName']};
    return {}
  }

  render() {
    return(
    <div>
    <link href="css/about.css" rel="stylesheet" />
    <link href="css/template.css" rel="stylesheet" />
    <nav className="navbar navbar-fixed-top navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            <span className="glyphicon glyphicon-home"></span>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form className="navbar-form navbar-left" role ="search">
            <div className="input-group">
              <input type = "text" className="form-control" placeholder = "Search Safehouse"
                     onChange={(e) => this.handleChange(e)} />
                <span className="input-group-btn">
                  <Link to={{ pathname: '/cities', query: this.sendSearch() }}>
                    <button type="submit" className="btn btn-default">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </Link>
                </span>
            </div>
          </form>
          <div className="nav navbar-nav navbar-right">
            <div className="btn-toolbar pull right" role="toolbar">
              <Link to='/profile'>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    My Profile
                  </button>
                </div>
              </Link>
              <Link to='/resulthome'>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    My Results
                  </button>
                </div>
              </Link>
              <Link to='/about'>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    About
                  </button>
                </div>
              </Link>
              <Link to='/host'>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    Host
                  </button>
                </div>
              </Link>
              <Link to='/forum'>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    Forum
                  </button>
                </div>
              </Link>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default btn btn-default navbar-btn dropdown-toggle" data-toggle="dropdown">
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li /><a href="#">Log Out</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
    )
  }
}
