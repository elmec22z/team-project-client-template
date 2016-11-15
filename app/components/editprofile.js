import React from 'react';
import Navbar from './navbar';
export default class editprofile extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    homeDesc: ' ',
    familyDesc: ' ',
    AreaDesc: ' ',
    Accommodations: ' '
  }
}


  render(){
    return(
      <head>
    		<meta charset="utf-8">
    		<meta http-equiv="X-UA-Compatible" content="IE=edge">
    		<meta name="viewport" content="width=device-width, initial-scale=1">

    		<title>About Safehouse</title>

    		<link href="css/bootstrap.min.css" rel="stylesheet">

    		<link href="css/about.css" rel="stylesheet">

    		<link href="css/template.css" rel="stylesheet">
    	</head>

    	<body>

    		<Navbar/>
        <div class = "container">
          <button type="button" onclick="alert('Saved Changes!')">Save Changes</button>
          <div class = "col-md-16">
            <a name="Describe your Home"></a>
            <div class = "panel panel-default">
              <div class="panel-body">
                <ul class ="nav nav-pills">
                  <li role="presentation" class="active">
                    <span><strong><font size="4">Describe Your Home</font></strong></span>
                  </li>
                </ul>
                <div class="panel-body">
                  <div class ="describe-your-home">
                    <textarea placeholder={{homeDesc}} style="resize:none" rows="6" cols="150">
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class = "col-md-16">
            <a name="Describe your Family"></a>
            <div class = "panel panel-default">
              <div class="panel-body">
                <ul class ="nav nav-pills">
                  <li role="presentation" class="active">
                    <span><strong><font size="4">Describe Your Family</font></strong></span>
                  </li>
                </ul>
                <div class="panel-body">
                  <div class ="describe-your-family">
                    <textarea placeholder={{familyDesc}} style="resize:none" rows="6" cols="150">
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class = "col-md-16">
            <a name="Describe your Area/Location"></a>
            <div class = "panel panel-default">
              <div class="panel-body">
                <ul class ="nav nav-pills">
                  <li role="presentation" class="active">
                    <span><strong><font size="4">Describe Your Area/Location</font></strong></span>
                  </li>
                </ul>
                <div class="panel-body">
                  <div class ="describe-your-Area-Location">
                    <textarea placeholder={{AreaDesc}} style="resize:none" rows="6" cols="150">
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class = "col-md-16">
            <a name="Describe your Accommodations for Guests"></a>
            <div class = "panel panel-default">
              <div class="panel-body">
                <ul class ="nav nav-pills">
                  <li role="presentation" class="active">
                    <span><strong><font size="4">Describe Your Accommodations for Guests</font></strong></span>
                  </li>
                </ul>
                <div class="panel-body">
                  <div class ="describe-your-guests">
                    <textarea placeholder={{Accommodations}} style="resize:none" rows="6" cols="150">
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
  }
}
