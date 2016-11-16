import React from 'react';
import Navbar from './navbar';
export default class About extends React.Component {
  render(){
    return (
      <div>
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <link href="css/about.css" rel="stylesheet"/>
        <link href="css/template.css" rel="stylesheet"/>
        <Navbar/>

      		<div className= "container">
      			<div className= "row">
      				<div className= "col-md-3">
      					<ul className="nav nav-pills nav-stacked">
      						<li role="presentation"><a href="#">User Name</a></li>
      						<li role="presentation"><a href="#">User Name</a></li>
      						<li role="presentation"><a href="#"><span className=
      							"glyphicon glyphicon-pencil"></span>
      							Edit Profile</a>
      						</li>
      						<li role="presentation" className="pres">
      							<a href="#who-we-are">
      								<span className="glyphicon glyphicon-user"></span>
      								Who We Are
      							</a>
      						</li>
      						<br/><br/>
      						<li role="presentation" className="pres">
      							<a href="#faq">
      								<span className="glyphicon glyphicon-flag"></span>
      								FAQ
      							</a>
      						</li>
      						<br/><br/>
      						<li role="presentation" className="pres">
      							<a href="#locations">
      								<span className="glyphicon glyphicon-briefcase"></span>
      								Locations
      							</a>
      						</li>
      						<br/><br/>
      						<li role="presentation" className="pres">
      							<a href="#contact-us">
      								<span className="glyphicon glyphicon-earphone"></span>
      								Contact Us
      							</a>
      						</li>
      						<br/><br/>
      					</ul>
      				</div>
      				<div className= "col-md-8">
      					<a name="who-we-are"></a>
      					<div className= "panel panel-default">
      						<div className="panel-body">
      							<ul className="nav nav-pills">
      								<li role="presentation" className="active">
      									<span><strong>Who We Are</strong></span>
      								</li>
      							</ul>
      							<div className="panel-body">
      								<div className="who-we-are">
      									About us
      								</div>
      							</div>
      						</div>
      					</div>
      					<a name="faq"></a>
      					<div className= "panel panel-default">
      						<div className="panel-body">
      							<ul className="nav nav-pills">
      								<li role="presentation" className="active">
      									<span><strong>Frequently Asked Questions</strong></span>
      								</li>
      							</ul>
      							<div className="panel-body">
      								<div className="faq">
      									<p>Sample Question 1</p>
      									<p>Sample Question 2</p>
      									<p>Sample Question 3</p>
      									<p>Sample Question 4</p>
      								</div>
      							</div>
      						</div>
      					</div>
      					<a name="locations"></a>
      					<div className= "panel panel-default">
      						<div className="panel-body">
      							<ul className="nav nav-pills">
      								<li role="presentation" className="active">
      									<span><strong>Locations</strong></span>
      								</li>
      							</ul>
      							<div className="panel-body">
      								<div className="locations">
      									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.7178436219087!2d-72.5289007852344!3d42.39115687918475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6d273e4f0f865%3A0xa0d6586089148e05!2sUniversity+of+Massachusetts+Amherst!5e0!3m2!1sen!2sus!4v1475627030590" frameborder="0" allowfullscreen></iframe>
      								</div>
      							</div>
      						</div>
      					</div>
      					<a name="contact-us"></a>
      					<div className= "panel panel-default">
      						<div className="panel-body">
      							<ul className="nav nav-pills">
      								<li role="presentation" className="active">
      									<span><strong>Contact Us</strong></span>
      								</li>
      							</ul>
      							<div className="panel-body">
      								<div className="contact-us">
      									<form>
      										Name: <br/>
      										<input type="text" name="name"/><br/><br/>
      									</form>
      									<form>
      										Email Address: <br/>
      										<input type="text" name="email"/><br/><br/>
      									</form>
      									<div className= "form-group">
      										How can we help?
      										<textarea className= "form-control" rows="2"
      											placeholder = "Your text here">
      										</textarea>
      									</div>
      									<form>
      										<input type="submit" value = "Submit"/>
      									</form>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      				<div className= "col-md-1">
      					Right Sidebar
      				</div>
      			</div>
      		</div>
        </div>
    )
  }
}
