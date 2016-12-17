import React from 'react';



export default class login extends React.Component {
  render(){
    return (
		<div>
    <div id="background">
      <img src="img/safehouse-worldmap.jpg" width="1500" height="979"/>
    </div>
    <div className="container">
  			<div className="container">
  				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  					<div className="nav navbar-nav navbar-right">
  						<div className="btn-toolbar pull right" role="toolbar">
  							<div className="btn-group" role="group">
  								<button type="button" className="btn btn-default navbar-btn">
  									About
  								</button>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
      <div className="row">
        <div className="col-md-12">
          <div id="login">
            <h1> LOGIN </h1>
            <br/
            <div id="username">
              <div className="input-group">
                <input type = "text" className= "form-control" placeholder = "Username"/>
                <span className= "input-group-btn">
                </span>
              </div>
            </div>
            <div id="password">
              <div className="input-group">
                <input type = "text" className= "form-control" placeholder = "Password"/>
                <span className= "input-group-btn">
                </span>
              </div>
            </div>
            <br/>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default navbar-btn">
                Login
              </button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default navbar-btn">
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="profile">
            <p> New User? </p>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default navbar-btn">
              <a href="profile.html"> Set Up Profile </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
	}
}
