import React from 'react';
import { Link } from 'react-router';

export default class splash extends React.Component {
  render(){
    return (
      <div>

        <div id="title">
        SafeHouse
        </div>

        <div>
          <body />
        </div>

        <div>
          <div id="login">
            <div className="row">
              <div className="col-md-12">

                  <h1> LOGIN </h1>
                  <br />


                  <div id="username">
                    <div className="input-group">
                      <input type = "text" className= "form-control" placeholder = "Username" />
                        <span className= "input-group-btn">
                        </span>
                      </div>
                    </div>

                    <div id="password">
                      <div className="input-group">
                        <input type = "text" className= "form-control" placeholder = "Password" />
                          <span className= "input-group-btn">
                          </span>
                        </div>
                      </div>

                      <br />
                      <div className="btn-group" role="group">
                        <Link to ='/profile'>
                        <button type="button" className="btn btn-default navbar-btn">
                          Login
                        </button>
                      </Link>
                      </div>

                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-default navbar-btn">
                          Forgot Password?
                        </button>
                      </div>
                      <div>
                    </div>
                    </div>
                  </div>
                </div>
        </div>
    </div>
    )
	}
}
