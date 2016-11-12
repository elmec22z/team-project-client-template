import React from 'react';
import { Link } from 'react-router'

export default class ResultCityEntry extends React.Component {
	constructor(props){
    super(props);
    this.state = props.data;
  }

  render() {
    console.log(this)
		return(
			<div className="row">
        <div className="col-md-12 result">
          <Link to={"/cities/"+this.state._id}>
            <div className="media">
              <div className="media-left">
                <img className="result-image" src={this.state.image} />
              </div>
              <div className="media-body">
                <div className="col-md-12">
                  <div className="row result-name">
                    {this.state.name}
                  </div>
                  <hr />
                  <div className="row result-info">
                    <div className="col-md-6">
                      <table>
                        <tbody>
                          <tr>
                            <td>Location:</td>
                            <td className="r">{this.state.location}</td>
                          </tr>
                          <tr>
                            <td>Climate:</td>
                            <td className="r">{this.state.climate}</td>
                          </tr>
                          <tr>
                            <td>Population:</td>
                            <td className="r">{this.state.population}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table>
                        <tbody>
                          <tr>
                            <td>Number of hosts:</td>
                            <td className="r">{this.state.people.length}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="col-md-12">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
	}
}