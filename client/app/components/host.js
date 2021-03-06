import React from 'react';
import Navbar from './navbar';
import {getProfileData} from '../server';
import { Link } from 'react-router';
//import {readDocument} from './database.js';
import {getUsersByLanguage} from '../server'


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
    language: "",
    location: "",
    climate: "",
    numberToHost:""
  }
}

//operates a search with the key
sendSearch() {
  var dict = {}
  for (var key in this.state) {
    if (!this.state.hasOwnProperty(key)) continue;
    var obj = this.state[key];
    if (obj !== '') {
      dict[key] = obj;
    }
  }
  return dict;
}


componentDidMount(){
  getUsersByLanguage(this.state.language, (language) => {
    this.setState({language: language});
  });
}

//matching algorithm for hosts
 matchAlgo(){
  var dict;
  for(var key in this.state.language){
    var x = document.getElementById("Arabic");
    if(x.hasOwnProperty(key)){
      var obj = this.state[key];
      if (obj !== '') {
      dict[key] = obj;
    }
  }
}
return dict;
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
                                              <br></br>
                                                <select>
                                                    <option value=""></option>
                                                    <option value="Spanish">Hausa</option>
                                                    <option value="French">Arabic</option>
                                                    <option value="Arabic">Somali</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Location
                                              <br></br>
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
                                              <br></br>
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
                                  <Link to={{ pathname: '/cities', query: this.matchAlgo()}}>
                                    <div className="container">
                                        <button className="entypo-right-open-big">Match Me!</button>
                                    </div>
                                  </Link>
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
