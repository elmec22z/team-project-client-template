import React from 'react';
import Navbar from './navbar';


export default class Forum extends React.Component {
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
                <div style={{height: 999999}}>
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
                  <h4>Top Answers <span className="label label-default" /></h4>
                  <div className="panel panel-default top-answers">
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-12">
                          <h3> What is the best app for real time speech translation?<span className="label label-default" /></h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="media">
                            <div className="media-left media-top">
                              <span className="glyphicon glyphicon-user"> </span>
                            </div>
                            <div className="media-body">
                              <a href="#">Someone </a>
                              <br /> Jan 10, 2016
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-md-12">
                              ANSWER HERE
                              <a href="#"> more ...</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    </div>
                  </div>
                  <div className="panel panel-default top-answers">
                    <div className="panel-body ">

                      <div className="row">
                        <div className="col-md-12">
                          <h3> Supermarkets in Toronto that cater to international people?<span className="label label-default" /></h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="media">
                            <div className="media-left media-top">
                              <span className="glyphicon glyphicon-user"> </span>
                            </div>
                            <div className="media-body">
                              <a href="#">Someone </a>
                              <br /> Sept 5, 2016
                            </div>
                          </div>
                          <hr />
                          <div className="row ">
                            <div className="col-md-12">
                              ANSWER HERE
                              <a href="#"> more ...</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    </div>
                  </div>
                </div>
              </div>
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
                        <h4> FREQUENT TOPICS <span className="label label-default" /></h4>
                        <ul>
                          <li><a href="#">Topic1</a></li>
                          <li><a href="#">Topic2</a></li>
                          <li><a href="#">Topic3</a></li>
                          <li><a href="#">Topic4</a></li>
                          <li><a href="#">Topic5</a></li>
                          <li><a href="#">Topic6</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
