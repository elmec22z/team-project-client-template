import React from 'react';
import Navbar from './navbar';
export default class profile extends React.Component {
  render(){
    return(
<div>
<Navbar/>
<div className = "container">
<div className="row">
<div className="col-md-12 .flash" >

<div className="panel panel-info">
  <div className="panel-heading">
    <h3 className="panel-title"> Name </h3>
  </div>
  <div className="panel-body">
    <div className="row">
      <div className="col-md-2 col-lg-2 " align="center"> <img alt="User Pic" src="img/blank-profile.png" className="img-circle img-responsive" /> </div>
      <div className=" col-md-9 col-lg-9 ">
        <table className="table table-user-information">
          <tbody>
            <tr>
              <td>Date of Birth</td>
              <td>01/24/1988</td>
            </tr>
            <tr>
								<td>Family size</td>
								<td>4</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Home Address</td>
              <td>----</td>
            </tr>
            <tr>
              <td>Email</td>
              <td><a href="mailto:info@support.com">info@support.com</a></td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>123-4567-890(Landline)</td>


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
