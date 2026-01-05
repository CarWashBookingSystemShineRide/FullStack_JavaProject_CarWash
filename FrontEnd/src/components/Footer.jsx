import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-column brand-col">
                    <div className="footer-brand">
                        <div className="footer-logo-box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                        </div>
                        <div className="brand-info">
                            <div className="brand-name">LuxeWash</div>
                            <div className="brand-tagline">PREMIUM CAR CARE</div>
                        </div>
                    </div>
                    <p className="footer-desc">
                        Premium car washing and detailing services. Your vehicle deserves the best care.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><a href="#">Book Now</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Services</h3>
                    <ul className="footer-links">
                        <li><a href="#">Exterior Wash</a></li>
                        <li><a href="#">Interior Cleaning</a></li>
                        <li><a href="#">Full Detailing</a></li>
                        <li><a href="#">Ceramic Coating</a></li>
                        <li><a href="#">Engine Wash</a></li>
                    </ul>
                </div>

                <div className="footer-column contact-col">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li>
                            <span className="contact-text">(555) 123-4567</span>
                        </li>
                        <li>
                            <span className="contact-text">hello@luxewash.com</span>
                        </li>
                        <li>
                            <span className="contact-text">123 Premium Avenue</span>
                        </li>
                        <li>
                            <span className="contact-text">Los Angeles, CA 90210</span>
                        </li>
                    </ul>
                    <div className="working-hours">
                        <h4>Working Hours</h4>
                        <p>Mon - Sat: 8AM - 7PM</p>
                        <p>Sunday: 9AM - 5PM</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 LuxeWash Premium Car Care. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
