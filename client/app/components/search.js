import React from 'react';
import { Link } from 'react-router';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      state: '',
      climate: '',
      language: '',
      overPop: '0',
      underPop: '50000'
    }
  }

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
                    <option value="">Country</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Syria">Syria</option>
                    <option value="Iraq">Iraq</option>
                  </select>
                  <select onChange={(e) => this.handleChange(e,'climate')}>
                    <option value="">Climate</option>
                    <option value="Continental">Continental</option>
                    <option value="Tropical">Tropical</option>
                    <option value="Tundra">Tundra</option>
                    <option value="Arid">Arid</option>
                    <option value="Temperate">Temperate</option>
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
