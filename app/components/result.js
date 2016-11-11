import React from 'react';
import Navbar from './navbar.js'

export default class Result extends React.Component {
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
          <div className="row">
            <div className="col-md-12 result">
              <a href="#link2">
                <div className="media" onclick="location.href='#link1'">
                  <div className="media-left">
                    <img className="result-image" src="img/blank-profile.png" />
                  </div>
                  <div className="media-body">
                    <div className="col-md-12">
                      <div className="row result-name">
                        Name
                      </div>
                      <hr />
                      <div className="row result-info">
                        <div className="col-md-6">
                          <table>
                            <tbody>
                              <tr>
                                <td>DOB:</td>
                                <td>MM/DD/YYYY</td>
                              </tr>
                              <tr>
                                <td>Family Size:</td>
                                <td>--</td>
                              </tr>
                              <tr>
                                <td>Location:</td>
                                <td>--</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6">
                          <table>
                            <tbody>
                              <tr>
                                <td>Contact:</td>
                              </tr>
                              <tr>
                                <td>Phone:</td>
                                <td>###-###-####</td>
                              </tr>
                              <tr>
                                <td>Email:</td>
                                <td>--</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-2 visible-sm" id="right-when-small"></div>
    </div>
  </div>

    )
  }
}