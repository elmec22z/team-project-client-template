import React from 'react';
import Navbar from './navbar';
import {getUserData} from '../server';
import { Link } from 'react-router';
//import {readDocument} from './database.js';
export default class profile extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    name: "",
    dob: "",
    familySize: "",
    gender: "",
    email:"",
    image:""
  }
}
/*pullfromDB(){
  var user = readDocument("user", 1);
  this.setState({
    numberToHost: user.numberToHost,
    name: user.name,
    dob: user.dob,
    gender: user.gender,
    email: user.email,
    image: user.image,
    familySize:user.familySize

  });
}
*/

componentDidMount(){
  getUserData('1', (feedData)=> {
    this.setState({
      name:feedData.name,
      dob: feedData.dob,
      gender:feedData.gender,
      email:feedData.email,
      image:feedData.image,
      numberToHost:feedData.numberToHost,
      familySize:feedData.familySize,
      address:feedData.address
    });
  });
}

/*id(){
  this.setState({
    numberToHost: document.getElementById("numberToHost"),
    name:  document.getElementById("name"),
    dob:  document.getElementById("dob"),
    gender:  document.getElementById("gender"),
    email: document.getElementById("email"),
    image: document.getElementById("image"),
    familySize: document.getElementById("family")

  });
}*/
  render(){
    return(
      <div>
        <Navbar/>
        <div className = "container">
          <div className="row">
            <div className="col-md-12 .flash" >

            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title"> {this.state.name} </h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-2 col-lg-2 " align="center">
                    <img alt="User Pic" src="img/blank-profile.png"
                    className="img-circle img-responsive" />
                  </div>
                  <div className=" col-md-9 col-lg-9 ">
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>Date of Birth</td>
                          <td>{this.state.dob}</td>
                        </tr>
                        <tr>
          								<td>Family size</td>
          								<td>{this.state.familySize}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>{this.state.gender}</td>
                        </tr>
                        <tr>
                          <td>Home Address</td>
                          <td>{this.state.address}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{this.state.email}</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
                  <div className="panel-footer">
                    <Link to='/editprofile'>
                      <button data-original-title="Edit this user" data-toggle="tooltip"
                        type="button" className="btn btn-sm btn-warning">
                        <i className="glyphicon glyphicon-edit"></i></button>
                      <span className="pull-right"> </span>
                    </Link>
                  </div>
            		</div>
              </div>
            </div>
          </div>
        </div>
        )
      }
}
