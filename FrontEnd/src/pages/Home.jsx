import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImg from '../assets/WhatsApp Image 2026-01-05 at 11.21.36 AM.jpeg'

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />

            <section className="hero-section" style={{ backgroundImage: `url("${heroImg}")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="star-icon">★</span> Premium Car Care Since 2000
                    </div>

                    <h1 className="hero-title">
                        PREMIUM CAR WASH <br />
                        <span className="hero-title-sub">& DETAILING SERVICES</span>
                    </h1>

                    <p className="hero-desc">
                        Professional care for your car — fast, safe, and reliable. <br />
                        Experience the luxury your vehicle deserves.
                    </p>

                    <div className="hero-actions">
                        <Link to="/services" className="btn-hero-primary">Book now &rarr;</Link>
                        <Link to="/services" className="btn-hero-outline">View Services</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
