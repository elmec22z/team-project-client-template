import React from 'react';
import Navbar from './navbar';
import {getProfileData} from '../server';
import { Link } from 'react-router';
//import {readDocument} from './database.js';
export default class host extends React.Component {
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
render(){
return(
<div>
<Navbar/> < div classNameName = "container" > <div className="row">
    <div className="col-md-12 .flash">

        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Host information
                </h3>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-2 col-lg-2 " align="center"></div>

                    <div className=" col-md-9 col-lg-9 ">
                        <table className="table table-user-information">
                            <tbody>
                                <tr>
                                    <td>Language spoken at home
                                        <select>
                                            <option value=""></option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="French">French</option>
                                            <option value="Arabic">Arabic</option>
                                            <option value="Hindi">Hindi</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Location
                                        <select>
                                            <option value=""></option>
                                            <option value="City">City</option>
                                            <option value="Rural">Rural</option>
                                            <option value="Suburbs">Suburbs</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Climate
                                        <select>
                                            <option value=""></option>
                                            <option value="Tropical">Tropical</option>
                                            <option value="Tundra">Tundra</option>
                                            <option value="Arid">Arid</option>
                                            <option value="Temperate">Temperate</option>
                                            <option value="Continental">Continental</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <section>
                            <div className="container">
                                <button className="entypo-right-open-big">Match Me!</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div >


)
}
}
