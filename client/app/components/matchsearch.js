import React from 'react';
import { Link } from 'react-router';
import resulthome from 'resulthome';
import { getUsersByCity, getCityById } from '../server'

export default class MatchSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      location: '',
      climate: '',
      numberToHost: '',
      overPop: '0',
      underPop: '50000'
    }
  }

//uses key to perform a search
  sendSearch() {
    var dict = {}
    for (var key in this.state) {
      if (!this.state.hasOwnProperty(key)) continue;
      var obj = this.state[key];
      if (obj !== '') {
        dict[key] = obj;
      }
    }
    return dict;
  }

//handles changes and changes the state values
  handleChange(e,name){
    this.setState({[name]: e.target.value});
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default search-panel">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-12 search">
                  <h3>Search Cities</h3>
                  <hr/>
                  <input type="text" id="city-search" placeholder="City Name"
                         onChange={(e) => this.handleChange(e,'cityName')} />
                  <select onChange={(e) => this.handleChange(e,'state')}>
                    <option value="">State</option>
                    <option value="MA">MA</option>
                    <option value="NY">NY</option>
                  </select>
                  <select onChange={(e) => this.handleChange(e,'climate')}>
                    <option value="">Climate</option>
                    <option value="Warm summer">Warm summer</option>
                    <option value="Cold winter"> Cold winder </option>
                  </select>
                  <h4>Population:</h4>
                  Over:
                  <form>
                    <div className="row">
                      <div className="col-xs-8">
                        <input type="range" name="overRange"
                               min="0" max={this.state.underPop} value={this.state.overPop}
                               onChange={(e) => this.handleChange(e,'overPop')} />
                      </div>
                      <div className="col-xs-4">
                        <input type="number" name="overInput"
                               min="0" max={this.state.underPop} value={this.state.overPop}
                               onChange={(e) => this.handleChange(e,'overPop')} />
                      </div>
                    </div>
                    Under:
                    <div className="row">
                      <div className="col-xs-8">
                        <input type="range" name="underRange"
                               min={this.state.overPop} max="50000" value={this.state.underPop}
                               onChange={(e) => this.handleChange(e,'underPop')} />
                      </div>
                      <div className="col-xs-4">
                        <input type="number" name="underInput"
                               min={this.state.overPop} max="50000" value={this.state.underPop}
                               onChange={(e) => this.handleChange(e,'underPop')} />
                      </div>
                    </div>
                  </form>
                  <Link to={{ pathname: '/cities', query: this.sendSearch()}}>
                    <button className="btn btn-default">
                      Submit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
