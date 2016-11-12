import React from 'react';
import Navbar from './navbar.js'
import ResultHomeEntry from './resulthomeentry.js'

export default class ResultHome extends React.Component {
  render() {
    return(
      <div>
        <link href="css/about.css" rel="stylesheet" />
        <link href="css/results.css" rel="stylesheet" />
        <link href="css/template.css" rel="stylesheet" />
        <Navbar/>
        <div className="contain">
          <div className="row" id="base-row">
            <div className="col-sm-2 visible-md visible-lg" id="left-half-of-page-just-a-temp-name"></div>
            <div className="col-sm-7" id="result-holder">
              <ResultHomeEntry />
            </div>
          </div>
          <div className="col-sm-2 visible-sm" id="right-when-small"></div>
        </div>
      </div>
    )
  }
}