import React from 'react';
import Navbar from './navbar';
import ResultCityEntry from './resultcityentry';
import Search from './search';
import { getCityData } from '../server';


export default class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    getCityData((cityData) => {
        this.setState(cityData);
    });
  }

  render() {
    var rows = [];
    for (var key in this.state) {
      if (!this.state.hasOwnProperty(key)) continue;
      var obj = this.state[key];
      rows.push(<ResultCityEntry key={key} data={obj} />);
    }
    if (rows.length < 1){
      rows.push(
        <div className="row" key={'key'}>
          <div className="col-md-12 result" key={'key'}>
            <h1 key={'key'}>No results for this search.</h1>
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
            <div className="col-sm-4 col-md-3 col-md-push-7 col-sm-push-8" id="search-col">
              <Search/>
            </div>
            <div className="col-sm-8 col-md-7 col-md-pull-3 col-sm-pull-4" id="result-holder">
              { rows }
            </div>
          </div>
        </div>
      </div>
    )
  }
}