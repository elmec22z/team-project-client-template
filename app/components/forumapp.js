import React from 'react';
import ReactDOM from 'react-dom';

class ForumFeed extends React.Component {
  render() {
    return (
      <div>
        // scrollable
        <div className="forum-question-answer panel">
          // Question Panel-->
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Ask </button>
                </span>
                <input type="text" className="form-control" placeholder="Ask or Search this Forum" />
              </div>
            </div>
          </div>

          // Top Questions Panel -->
          // heading -->
          <h4>Top Questions <span className="label label-default"></span></h4>

          // 1 Question and Answer -->
          <div className="panel panel-default answers">
            <div className="panel-body">
              // Post metadata -->
              // Question -->
              <div className="row">
                <div className="col-md-12">
                  <h3> What is the best app for real time speech translation?<span className="label label-default"></span></h3>
                </div>
              </div>

              // Author name, pic and date -->
              <div className="row">
                <div className="col-md-12">
                  // Name and Date -->
                  <div className="media">
                    <div class ="media-left media-top">
                      <span className="glyphicon glyphicon-user"> </span>
                    </div>
                    <div className="media-body">
                      <a href="#">Someone </a>
                      <br /> Jan 10, 2016
                    </div>
                  </div>
                  // Answer -->
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      ANSWER HERE
                      <a href="#"> more ...</a>
                    </div>
                  </div>
                </div>
              </div>

            </div> // End of answer panel body -->


            // Like and comment -->
            <div className="panel-footer like-comment ">
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-inline">
                    <li>
                    <a href="#"> Upvote <span className="badge">300+</span></a>
                    </li>
                    <li>
                    <a href="#"> Comment <span className="badge">20+</span></a>
                    </li>
                    <li>
                    <a href="#"> <span className="glyphicon glyphicon-save">
                      </span> Save </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> // End of panel body -->

          </div> // End of panel -->

          // 2 Question and Answer -->
          <div className="panel panel-default top-answers">
            <div className="panel-body ">
              // Post metadata -->
              // Question -->
              <div className="row">
                <div className="col-md-12">
                  <h3> Supermarkets in Toronto that cater to international people?<span className="label label-default"></span></h3>
                </div>
              </div>

              // Author name, pic and date -->
              <div className="row">
                <div className="col-md-12">
                  // Name and Date -->
                  <div className="media">
                    <div class ="media-left media-top">
                      <span className="glyphicon glyphicon-user"> </span>
                    </div>
                    <div className="media-body">
                      <a href="#">Someone </a>
                      <br /> Sept 5, 2016
                    </div>
                  </div>
                  // Answer -->
                  <hr /> // Line -->

                  <div className="row ">
                    <div className="col-md-12">
                      ANSWER HERE
                      <a href="#"> more ...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> // End of answer panel body -->


            // Like and comment -->
            <div className="panel-footer like-comment">
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-inline">
                    <li>
                    <a href="#"> Upvote <span className="badge">250+</span></a>
                    </li>
                    <li>
                    <a href="#"> Comment <span className="badge">30+</span></a>
                    </li>
                    <li>
                    <a href="#"> <span className="glyphicon glyphicon-save">
                      </span> Save </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> // End of panel body -->
          </div> // End of panel -->
        </div>
      </div>
    )
  }
}

React.DOM.render (
  <Feed />,
  document.getElementbyId('forum-feed')
);
