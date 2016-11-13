import React from 'react';
import Navbar from './navbar'
import ResultHomeEntry from './resulthomeentry'
import { getUsersByCity, getCityById } from '../server'
import Search from './search'

export default class ResultHome extends React.Component {


  constructor(props) {
    super(props);
    this.state = props.data;
  }

  componentDidMount() {
    getUsersByCity(this.props.params.city, (peopleData) => {
      this.setState(peopleData);
    });
  }

  render() {
    var rows = []; 
    for (var key in this.state) {
      if (!this.state.hasOwnProperty(key)) continue;
      var obj = this.state[key]
      rows.push(<ResultHomeEntry key={key} data={obj} />);
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