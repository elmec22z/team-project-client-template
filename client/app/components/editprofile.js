import React from 'react';
import Navbar from './navbar';
import {getProfileData} from '../server';
/*import {readDocument, writeDocument, addDocument, updateDocument, readCollection} from '../database.js';*/
export default class editprofile extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    homeDesc: "",
    familyDesc: "",
    AreaDesc: "",
    Accommodations: ""
  }
  //pullfromDB();
}

componentDidMount(){
  getProfileData(1, (feedData)=> {
    this.setState({homeDesc: feedData.homeDesc, familyDesc: feedData.familyDesc, AreaDesc: feedData.AreaDesc, Accommodations: feedData.Accommodations});
  });
}


render(){
  return(
    <div>
      <Navbar/>
      <div className = "container">
        <button type="button" onclick="alert('Save Changes!')">Save Changes</button>
        {/*<div className = "col-md-16">
          <a name="Describe your Home"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Describe Your Home</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-home">
                  <textarea styles="resize:none" rows="6" cols="150" value={this.state.homeDesc} onChange={this.state.homeDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className = "col-md-16">
          <a name="Date of birth"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Date of birth</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-home">
                  <textarea styles="resize:none" rows="1" cols="120" value={this.state.homeDesc} onChange={this.state.homeDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className = "col-md-16">
          <a name="Describe your Family"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Describe Your Family</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-family">
                  <textarea styles="resize:none" rows="6" cols="150" value={this.state.familyDesc} onChange={this.state.familyDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className = "col-md-16">
          <a name="Family Size"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Family Size</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-family">
                  <textarea styles="resize:none" rows="1" cols="120" value={this.state.familyDesc} onChange={this.state.familyDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className = "col-md-16">
          <a name="Describe your Area/Location"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Describe Your Area/Location</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-Area-Location">
                  <textarea styles="resize:none" rows="6" cols="150" value={this.state.AreaDesc} onChange={this.state.AreaDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className = "col-md-16">
          <a name="Gender"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Gender</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-family">
                  <textarea styles="resize:none" rows="1" cols="120" value={this.state.familyDesc} onChange={this.state.familyDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "col-md-16">
          <a name="Home address"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Home address</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-family">
                  <textarea styles="resize:none" rows="1" cols="120" value={this.state.familyDesc} onChange={this.state.familyDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "col-md-16">
          <a name="Email"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Email</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-family">
                  <textarea styles="resize:none" rows="1" cols="120" value={this.state.familyDesc} onChange={this.state.familyDesc}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*}<div className = "col-md-16">
          <a name="Describe your Accommodations for Guests"></a>
          <div className = "panel panel-default">
            <div className="panel-body">
              <ul className ="nav nav-pills">
                <li role="presentation" className="active">
                  <span><strong><font size="4">Describe Your Accommodations for Guests</font></strong></span>
                </li>
              </ul>
              <div className="panel-body">
                <div className ="describe-your-guests">
                  <textarea styles="resize:none" rows="6" cols="150" value={this.state.Accommodations} onChange={this.state.Accommodations}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    )
  }
}
