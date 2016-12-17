import React from 'react';
import Navbar from './navbar';


export default class ForumQuestionEntry extends React.Component {
  render() {
    return (
      <div className="panel panel-default forum-question-entry">
        <div className="panel-body">
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Ask </button>
            </span>
            <input type="text" className="form-control" placeholder="Ask or Search this Forum" />
          </div>
        </div>
      </div>
    )
  }
}
