import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
// Footer removed
import img1 from '../assets/image.png'
import img2 from '../assets/WhatsApp Image 2026-01-03 at 2.12.49 PM.jpeg'
import img3 from '../assets/WhatsApp Image 2026-01-05 at 11.20.47 AM.jpeg'
import img4 from '../assets/WhatsApp Image 2026-01-05 at 11.21.36 AM.jpeg'

export default function Register() {
    const [regData, setRegData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agree: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleRegChange = (e) => {
        const { name, value, type, checked } = e.target
        setRegData({
            ...regData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        console.log('Register', regData)
    }

    return (
        <div className="page-wrap">
            <div className="signin-wrapper">
                <div className="auth-cards">
                    <div className="image-card">
                        <Carousel images={[img1, img2, img3, img4]} interval={3500} />
                    </div>

                    <div className="signin-card">
                        <div className="card-form">
                            <h2>Sign Up</h2>
                            <p className="lead">Join us for premium car care services</p>

                            <form onSubmit={handleRegisterSubmit}>
                                <div className="form-row">
                                    <label>Full Name *</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </span>
                                        <input
                                            className="form-control"
                                            name="fullName"
                                            placeholder="John Doe"
                                            value={regData.fullName}
                                            onChange={handleRegChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <label>Email Address *</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </span>
                                        <input
                                            className="form-control"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={regData.email}
                                            onChange={handleRegChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <label>Phone Number</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </span>
                                        <input
                                            className="form-control"
                                            name="phone"
                                            placeholder="(555) 123-4567"
                                            value={regData.phone}
                                            onChange={handleRegChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <label>Password *</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </span>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            name="password"
                                            placeholder="••••••••"
                                            value={regData.password}
                                            onChange={handleRegChange}
                                            style={{ paddingRight: 40 }}
                                        />
                                        <button
                                            type="button"
                                            className="toggle-btn"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#8a6f66' }}
                                        >
                                            {showPassword ? (
                                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                            ) : (
                                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <label>Confirm Password *</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </span>
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            className="form-control"
                                            name="confirmPassword"
                                            placeholder="••••••••"
                                            value={regData.confirmPassword}
                                            onChange={handleRegChange}
                                            style={{ paddingRight: 40 }}
                                        />
                                        <button
                                            type="button"
                                            className="toggle-btn"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#8a6f66' }}
                                        >
                                            {showConfirmPassword ? (
                                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                            ) : (
                                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="terms-row">
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        checked={regData.agree}
                                        onChange={handleRegChange}
                                    />
                                    <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                                </div>

                                <div className="btn-container">
                                    <button type="submit" className="btn-primary">Sign Up</button>
                                </div>
                            </form>

                            <div className="auth-footer">
                                Already have an account? <Link to="/login">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
