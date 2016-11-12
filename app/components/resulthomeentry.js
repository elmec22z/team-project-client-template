import React from 'react';

export default class ResultEntry extends React.Component {
	render() {
		return(
			<div className="row">
        <div className="col-md-12 result">
          {/* Add link to user profile when that is done */}
            <div className="media">
              <div className="media-left">
                <img className="result-image" src="img/blank-profile.png" />
              </div>
              <div className="media-body">
                <div className="col-md-12">
                  <div className="row result-name">
                    {this.props.data.name}
                  </div>
                  <hr />
                  <div className="row result-info">
                    <div className="col-md-6">
                      <table>
                        <tbody>
                          <tr>
                            <td>DOB:</td>
                            <td>{this.props.data.dob}</td>
                          </tr>
                          <tr>
                            <td>Family Size:</td>
                            <td>{this.props.data.familySize}</td>
                          </tr>
                          <tr>
                            <td>Location:</td>
                            <td>{this.props.data.address}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table>
                        <tbody>
                          <tr>
                            <td>Number to host:</td>
                            <td>{this.props.data.numberToHost}</td>
                          </tr>
                          <tr>
                            <td>How long to host</td>
                            <td>{this.props.data.howLongToHost}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* End link */}
        </div>
      </div>
    )
	}
}