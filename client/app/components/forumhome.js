import React from 'react';
import Navbar from './navbar';


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



                <div className="panel panel-default forum-question-update">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>
                          <a href="#">What is the best Smartphone app for translating your voice into other languages?</a>
                          <span className="label label-default"></span>
                          </h3>
                      </div>
                    </div>
                    <div className= "row">
                      <div className="col-md-10">
                        <div className="media">
                          <div className="media-left media-top">
                            <span className="glyphicon glyphicon-user"></span>
                          </div>
                          <div className="media-body">
                            <a href="#">Someone </a>
                            <br /> Yesterday
                          </div>
                        </div>
                      </div>

                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <ul className="list-inline">
                          <li>
                          <a href="#"> Follow <span className="badge">300+</span></a>
                          </li>
                          <li>
                          <a href="#"> Answer <span className="badge">20+</span></a>
                          </li>
                          <li>
                          <a href="#"> <span className="glyphicon glyphicon-save">
                            </span> Save </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className="panel-footer">
                    <ul className="media-list">
                      <li className="media">
                        <div className="media-left media-top">
                          <span className="glyphicon glyphicon-user"></span>
                        </div>
                        <div className="media-body media-left">
                          <a href="#">Someone Else</a>
                          <br />
                          <br />
                          Id like to recommend this translation app - Takeasy.

                          More than voice, pictures and texts are also available.~~

                          Takeasy,the worlds first remote on-line real-time & instant live human translator& interpreter, your personal secretary & assistant helps to translate 9 languages for travel, study or work throughout the world. At present, Takeasy supports 9 languages for live-human translation, including: English, Japanese, Korean, Chinese, French, German, Russian,Spanish, Portuguese etc.

                          you can visit www.itakeeasy.com to get more information.

                          -https:www.quora.com/What-is-the-best-Smartphone-app-for-translating-your-voice-into-other-languages

                          <hr />
                          <a href="#">Upvote</a> · <a href="#">Comment</a> · 20 hrs
                          <div className="pull-right">
                            <a href="#">See more</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="panel panel-default forum-question-update">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>
                          <a href="#">How do I quickly and efficiently learn a new language?</a>
                          <span className="label label-default"></span></h3>
                      </div>
                    </div>
                    <div className= "row">
                      <div className="col-md-10">
                        <div className="media">
                          <div className="media-left media-top">
                            <span className="glyphicon glyphicon-user"></span>
                          </div>
                          <div className="media-body">
                            <a href="#">Someone </a>
                            <br /> Yesterday
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <ul className="list-inline">
                          <li>
                          <a href="#"> Follow <span className="badge">426+</span></a>
                          </li>
                          <li>
                          <a href="#"> Answer <span className="badge">39+</span></a>
                          </li>
                          <li>
                          <a href="#"> <span className="glyphicon glyphicon-save">
                            </span> Save </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel-footer forum-answer-update">
                    <ul className="media-list">
                      <li className="media">
                        <div className="media-left media-top">
                          <span className="glyphicon glyphicon-user"></span>
                        </div>
                        <div className="media-body media-left">
                          <a href="#">Someone Else</a>
                          <br />
                          <br />
                          Hi,

                          I didn’t study linguistics. I studied mathematics. But language learning is my passion. I was recently invited to give a talk at Oxford University on how to effectively learn Russian or any language (you can watch it here http://livediversified.com/how-t...). Below you can find the gist of my favourite language learning methods which are backed by research results in cognitive psychology - the science of learning.

                          Before I say anything about learning methods I want to stress one thing. As with most things in life, including learning a language, outstanding results are achieved because of the love for something. You should feel happy when you learn a language or anything else; otherwise, learning is not effective. You should imagine learning a language as a delicious gourmet dish of which you savor each and every mouthful. It’s important that you feel a language with all your senses. If it fills you with joy, immerse yourself in a song, a poem, a book, a film, or anything you find interesting in the language. Don’t be obsessed with timeframes, even if your goal is to speak the language very quickly. It will happen anyway if you nurture love for it.

                          OK, Id better move on to the methods before I get too cheesy.

                          -https:www.quora.com/How-do-I-quickly-and-efficiently-learn-a-new-language

                          <hr />
                          <a href="#">Upvote</a> · <a href="#">Comment</a> · 20 hrs
                          <div className="pull-right">
                            <a href="#">See more</a>
                          </div>
                        </div>
                      </li>
                    </ul>
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
                        <h4> FREQUENT TOPICS <span className="label label-default"></span></h4>
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
