import React from 'react';
import Navbar from './navbar';
import ForumQuestionEntry from './forumquestionentry';
import ForumRightColumn from './forumrightcolumn';
import ForumItem from './forumitem';


export default class ForumHome extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="row">
              <div className="page-header header-gap">
                <h1> Safehouse Forum <small>Ask your questions here!</small></h1>
              </div>
              <div className="col-md-9">
                <ForumQuestionEntry />
                <ForumItem />
              </div>
              <ForumRightColumn />
          </div>
        </div>
      </div>
    )
  }
}
