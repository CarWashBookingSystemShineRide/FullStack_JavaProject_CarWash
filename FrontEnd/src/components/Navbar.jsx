import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.jpeg'

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="site-brand">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                    <img src={logoImg} alt="LuxeWash" className="brand-logo" />
                    <div className="brand-meta">
                        <div className="brand-text">LuxeWash</div>
                        <div className="brand-sub">Premium Car Care</div>
                    </div>
                </Link>
            </div>
            <nav className="site-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/services">Service</Link>
                <Link className="nav-link" to="/pricing">Pricing</Link>
                <a className="nav-link" href="#">Contact</a>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link register" to="/register">Register</Link>
            </nav>
        </header>
    )
}
