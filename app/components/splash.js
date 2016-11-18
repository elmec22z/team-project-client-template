import React from 'react';
import { Link } from 'react-router';
export default class splash extends React.Component {
  render(){
    return (
    	<div>
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
              <input type = "text" className="form-control" placeholder = "Search Safehouse" />
                <span className="input-group-btn">
                  <Link to='/cities'>
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
              <Link to='/about'>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    About
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
		    <div id="background">
		      <img src="img/safehouse-worldmap.jpg" width="1500" height="979"/>
		    </div>
    		<div className="row">
            <div id="searchbar">
              <div className="input-group">
                <input type = "text" className= "form-control" placeholder = "Find Potential Cities..."/>
                <span className= "input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>
        </div>
        </div>
        )
	}	
}
