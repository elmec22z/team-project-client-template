import React from 'react';
import { Link } from 'react-router';

export default class Search extends React.Component {

  handleChange(e){
    console.log(e);
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default search-panel">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-12 search">
                  <h3>Search</h3>
                  <hr/>
                  <input type="text" id="city-search"
                         placeholder="City Name" />
                  <select>
                    <option>State</option>
                    <option value="MA">MA</option>
                  </select>
                  <select>
                    <option>Climate</option>
                    <option value="Warm summer, Cold winter">Warm summer, Cold winter</option>
                  </select>
                  <h4>Population:</h4>
                  Over:
                  <form>
                    <div className="row"> 
                      <div className="col-xs-8">
                        <input type="range" name="overRange" 
                               min="0" max="20000" value="0" 
                               oninput="
                               this.form.overInput.value=this.value;
                               this.form.underRange.min=this.value;
                               this.form.underInput.min=this.value;" 
                               onChange={(e) => this.handleChange(e)} />
                      </div>
                      <div className="col-xs-4">
                        <input type="number" name="overInput"
                               min="0" max="20000" value="0" 
                               oninput="
                               this.form.overRange.value=this.value;
                               this.form.underRange.min=this.value;
                               this.form.underInput.min=this.value;" 
                               onChange={(e) => this.handleChange(e)} />
                      </div>
                    </div>
                    Under:
                    <div className="row"> 
                      <div className="col-xs-8">
                        <input type="range" name="underRange" 
                               min="0" max="20000" value="20000" 
                               oninput="
                               this.form.underInput.value=this.value;
                               this.form.overRange.max=this.value;
                               this.form.overInput.max=this.value;" 
                               onChange={(e) => this.handleChange(e)} />
                      </div>
                      <div className="col-xs-4">
                        <input type="number" name="underInput"
                               min="0" max="20000" value="20000" 
                               oninput="
                               this.form.underRange.value=this.value;
                               this.form.overRange.max=this.value;
                               this.form.overInput.max=this.value;" 
                               onChange={(e) => this.handleChange(e)} />
                      </div>
                    </div>
                  </form>
                  <button className="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}