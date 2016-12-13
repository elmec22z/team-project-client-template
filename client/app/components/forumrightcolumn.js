import React from 'react';
import Navbar from './navbar';


export default class ForumRightColumn extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <a href="#">My Forum</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body freq-topics-list">
                <h4> FREQUENT TOPICS <span className="label label-default"></span></h4>
                <ul>
                  <li><a href="#">Housing</a></li>
                  <li><a href="#">Schools</a></li>
                  <li><a href="#">Food</a></li>
                  <li><a href="#">Language</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Jobs</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}
