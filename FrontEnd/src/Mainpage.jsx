import React from "react";
import "./App.css";

const Mainpage = () => {
	return (
		<div className="dashboard-hero">
			<header className="hero-header">
				<div className="logo">LuxeWash</div>
				<nav className="hero-nav">
					<a className="nav-link">Home</a>
					<a className="nav-link">Service</a>
					<a className="nav-link">Pricing</a>
					<a className="nav-link">Contact</a>
					<div className="nav-actions">
						<a className="nav-link login">Login</a>
						<button className="btn register">Register</button>
					</div>
				</nav>
			</header>

			<div className="hero-content">
				<span className="badge">Premium Car Care Since 2009</span>
				<h1 className="hero-title">
					PREMIUM CAR WASH
					<br />
					<span className="hero-sub">&amp; DETAILING SERVICES</span>
				</h1>

				<p className="hero-lead">
					Professional care for your car — fast, safe, and reliable. Experience the
					luxury your vehicle deserves.
				</p>

				<div className="hero-cta">
					<button className="btn primary">Book now →</button>
					<button className="btn outline">View Services</button>
				</div>

				<ul className="hero-features">
					<li>100% Satisfaction</li>
					<li>Express Service</li>
					<li>5-Star Rated</li>
				</ul>
			</div>
		</div>
	);
};

export default Mainpage;
