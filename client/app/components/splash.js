import React from 'react';
import Navbar from './navbar';
import ErrorBanner from './errorbanner'

export default class splash extends React.Component {
  render(){
    return (
    	<div>
        <Navbar />
        <div id="background">
          <img src="img/safehouse-worldmap.jpg" width="1500" height="979"/>
        </div> 
      </div>
    )
	}
}
