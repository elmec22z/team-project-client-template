import React from 'react';
import Navbar from './navbar';
import {getProfileData} from '../server';
import {getUserData} from '../server';
import {editProfileData} from '../server';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';
/*import {readDocument, writeDocument, addDocument, updateDocument, readCollection} from '../database.js';*/
export default class editprofile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dob: "",
      familySize: "",
      gender: "",
      email: "",
      address: ""
    }
  }

  componentDidMount(){

    getUserData('1', (user) => {
      this.setState({
        dob: user.dob,
        familySize: user.familySize,
        gender:user.gender,
        email:user.email,
        address:user.address
      });
    });
    console.log("old dob: "+ user.dob.value);
  }

  handleDobChange(e) {
    e.preventDefault();
    this.setState({"dob": e.target.value});
    console.log("new dob: "+ dob.value);
  }

  handleFamilySizeChange(e) {
    e.preventDefault();
    this.setState({"familySize": e.target.value});
    console.log("new familySize: "+ familySize.value);
  }

  handleGenderChange(e) {
    e.preventDefault();
    this.setState({"gender": e.target.value});
    console.log("new gender: "+ gender.value);
  }

  handleAddressChange(e) {
    e.preventDefault();
    this.setState({"address": e.target.value});
    console.log("new address: "+ address.value);
  }

  handleEmailChange(e) {
    e.preventDefault();
    this.setState({"email": e.target.value});
    console.log("new email: "+ email.value);
  }

  handleSave(e) {
    e.preventDefault();
    editProfileData('1', this.state, (userData) => {
      this.setState(userData);
    });
    console.log("NewData"+userData.value);
    browserHistory.push('/profile');
  }

  render(){
    return(
      <div>
        <Navbar/>
        <div className = "container">

          <button className="btn btn-default update-button"
            onClick={(e) => this.handleSave(e)}>
            <span className="glyphicon glyphicon-pin"></span>
            Save and Exit
          </button>

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
                  <div className ="date-of-birth">
                    <input type ="dob"
                      type='text'
                      id="dob"
                      defaultvalue = {this.state.dob}
                      onChange={(e) => this.handleDobChange(e)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className = "col-md-16">
            <a name="familySize"></a>
            <div className = "panel panel-default">
              <div className="panel-body">
                <ul className ="nav nav-pills">
                  <li role="presentation" className="active">
                    <span><strong><font size="4">Family Size</font></strong></span>
                  </li>
                </ul>
                <div className="panel-body">
                  <div className ="family-size">
                    <input type ="family-size"
                      type='text'
                      id="dob"
                      defaultvalue = {this.state.familySize}
                      onChange={(e) => this.handleFamilySizeChange(e)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  <div className ="gender">
                    <input type ="gender"
                      type='text'
                      id="dob"
                      defaultvalue = {this.state.gender}
                      onChange={(e) => this.handleGenderChange(e)} />
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
                  <div className ="home_address">
                    <input type ="home_address"
                      type='text'
                      id="home_address"
                      defaultvalue = {this.state.address}
                      onChange={(e) => this.handleAddressChange(e)} />
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
                  <div className ="email">
                    <input type ="email"
                      type='text'
                      id="email"
                      defaultvalue = {this.state.email}
                      onChange={(e) => this.handleEmailChange(e)} />

                    {/*<textarea styles="resize:none" rows="1" cols="120" value={this.state.familyDesc} onChange={this.state.familyDesc}>
                    </textarea> */}
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
