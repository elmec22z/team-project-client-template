import React from 'react';
import Navbar from './navbar';
import ResultCityEntry from './resultcityentry';
import {getCityData} from '../server';


export default class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    getCityData((cityData) => {
        // Note: setState does a *shallow merge* of
        // the current state and the new state. If
        // state was currently set to {foo: 3}, and
        // we setState({bar: 5}), state would then be
        // {foo: 3, bar: 5}. This won't be a problem here.
        this.setState(cityData);
    });
  }

  render() {
    console.log(this.state);
    var rows = [];
    for (var key in this.state) {
      if (!this.state.hasOwnProperty(key)) continue;
      var obj = this.state[key];
      rows.push(<ResultCityEntry key={key} data={obj} />);
    }
    if (rows.length < 1){
      rows.push(
        <div className="row">
          <div className="col-md-12 result">
            <h1>No results for this search.</h1>
          </div>
        </div>
      )
    }
    return (
      <div>

        <link href="css/about.css" rel="stylesheet" />
        <link href="css/results.css" rel="stylesheet" />
        <link href="css/template.css" rel="stylesheet" />
        <Navbar/>
        <div className="contain">
          <div className="row" id="base-row">
            <div className="col-sm-2 visible-md visible-lg" id="left-half-of-page-just-a-temp-name"></div>
            <div className="col-sm-7" id="result-holder">
              { rows }
            </div>
          </div>
          <div className="col-sm-2 visible-sm" id="right-when-small"></div>
        </div>
      </div>
    )
  }
}