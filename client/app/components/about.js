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
									<p>Safehouse is a web application intended to match hosts to a 
									specific region based on affordability, crime rate, industry, 
									and climate of the location of the host.
									</p>
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
									<p><em>How does it work?</em></p>
										<p>
										Hosts state information about themselves including their 
										language spoken at home, their location, the climate in 
										their location, and how many people that they are able to host,
										and we will match the host with an appropriate location based on 
										their inputs as to where the refugees would come from.
										</p>
									<p><em>Where are we located?</em></p>
										<p>
										We are based out of Amherst, Massachusetts. For directions to 
										our office, please look at the map below in the "Locations" section.
										</p>									
									<p><em>Who can I contact if I have questions about Safehouse?</em></p>
										<p>
										Click on the "Forum" tab at the top of the page to post your 
										own questions, and you can also see questions that other people
										have asked. You can also contact us using the form below.
										</p>									
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
				</div>
			</div>
		</div>
  </div>
)
}
}
