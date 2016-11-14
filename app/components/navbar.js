import React from 'react';

export default class Navbar extends React.Component {
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
              <input type = "text" className="form-control" placeholder = "Search Safehouse" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
            </div>
          </form>
          <div className="nav navbar-nav navbar-right">
            <div className="btn-toolbar pull right" role="toolbar">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default navbar-btn">
                  Home
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default navbar-btn">
                  My Profile
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default navbar-btn">
                  About
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default navbar-btn">
                  Forum
                </button>
              </div>
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