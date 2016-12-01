import React from 'react';
import Navbar from './navbar';
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
    image:"",
    numberToHost:""
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
id(){
  this.setState({
    numberToHost: document.getElementById("numberToHost"),
    name:  document.getElementById("name"),
    dob:  document.getElementById("dob"),
    gender:  document.getElementById("gender"),
    email: document.getElementById("email"),
    image: document.getElementById("image"),
    familySize: document.getElementById("family")

  });
}
  render(){

    return(
<div>
<Navbar/>
<div className = "container">
<div className="row">
<div className="col-md-12 .flash" >

<div className="panel panel-info">
  <div className="panel-heading">
    <h3 className="panel-title"> {this.props.name} </h3>
  </div>
  <div className="panel-body">
    <div className="row">
      <div className="col-md-2 col-lg-2 " align="center"> <img alt="User Pic" src="img/blank-profile.png" className="img-circle img-responsive" /> </div>
      <div className=" col-md-9 col-lg-9 ">
        <table className="table table-user-information">
          <tbody>
            <tr>
              <td>Date of Birth</td>
              <td>{this.props.dob}</td>
            </tr>
            <tr>
								<td>Family size</td>
								<td>{this.props.familySize}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{this.props.gender}</td>
            </tr>
            <tr>
              <td>Home Address</td>
              <td>{this.props.address}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.email}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{this.props.number}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
       <div className="panel-footer">
         <a href="edit.html" data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit"></i></a>
              <span className="pull-right"> </span>
      </div>
		</div>
</div>
</div>
</div>
</div>
)
}
}
