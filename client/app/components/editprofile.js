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
          <button type="button" onclick="alert('Save Changes!')">Save Changes</button>
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
                    <textarea styles="resize:none" rows="1" cols="120" defaultvalue={this.state.homeDesc} onChange={this.state.homeDesc}>
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      )
    }
  }
