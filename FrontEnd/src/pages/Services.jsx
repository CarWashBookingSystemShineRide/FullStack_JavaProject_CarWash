import React from 'react'
import img1 from '../assets/image.png'
import img2 from '../assets/WhatsApp Image 2026-01-03 at 2.12.49 PM.jpeg'
import img3 from '../assets/WhatsApp Image 2026-01-05 at 11.20.47 AM.jpeg'
// Footer removed

export default function Services() {
    return (
        <div className="page-wrap">
            <div className="services-section">
                <div className="search-wrap">
                    <h2>Where Do You Want Car Wash Services?</h2>
                    <div className="search-box">
                        <input type="text" placeholder="Enter the service" />
                        <button className="search-icon-btn">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="categories-bar">
                    <div className="category-item">
                        <div className="category-icon">⚙️</div>
                        <span>Suspension & Fitments</span>
                    </div>
                    <div className="category-item active">
                        <div className="category-icon">🚗</div>
                        <span>Car Spa & Clean</span>
                    </div>
                    <div className="category-item">
                        <div className="category-icon">🚿</div>
                        <span>Windshield & Lights</span>
                    </div>
                    <div className="category-item">
                        <div className="category-icon">⚙️</div>
                        <span>Clutch & Body Parts</span>
                    </div>
                    <div className="category-item">
                        <div className="category-icon">📋</div>
                        <span>Car Inspections</span>
                    </div>
                </div>

                <div className="service-list">
                    <div className="service-card-wide">
                        <div className="service-img">
                            <img src={img3} alt="Interior Spa" />
                        </div>
                        <div className="service-info">
                            <h3>Car Interior Spa</h3>
                            <div className="service-badges">
                                <span className="badge-item">⏱️ Takes 8 hrs</span>
                                <span className="badge-item">🔁 Every 3 months (Recommended)</span>
                            </div>
                            <ul className="service-features-grid">
                                <li>Product Finish</li>
                                <li>Interior Cleaning</li>
                                <li>Dashboard & Console Wipe</li>
                                <li>Wet and Dry Vacuum Treatment</li>
                                <li>Air Freshner Cleaning</li>
                            </ul>
                            <button className="btn-book-sm">Book Now</button>
                        </div>
                    </div>

                    <div className="service-card-wide">
                        <div className="service-img">
                            <img src={img2} alt="Exterior Foam Wash" />
                        </div>
                        <div className="service-info">
                            <h3>Exterior Foam Wash</h3>
                            <div className="service-badges">
                                <span className="badge-item">⏱️ Takes 1 hr</span>
                                <span className="badge-item">🔁 Monthly (Recommended)</span>
                            </div>
                            <ul className="service-features-grid">
                                <li>High Pressure Wash</li>
                                <li>Active Foam Application</li>
                                <li>Wheel and Rim Cleaning</li>
                                <li>Microfiber Hand Dry</li>
                                <li>Exterior Polish</li>
                            </ul>
                            <button className="btn-book-sm">Book Now</button>
                        </div>
                    </div>

                    <div className="service-card-wide">
                        <div className="service-img">
                            <img src={img1} alt="Wheel & Tire Detail" />
                        </div>
                        <div className="service-info">
                            <h3>Wheel & Tire Detail</h3>
                            <div className="service-badges">
                                <span className="badge-item">⏱️ Takes 45 min</span>
                                <span className="badge-item">🔁 Every 2 weeks (Recommended)</span>
                            </div>
                            <ul className="service-features-grid">
                                <li>Alloy Wheel Cleaning</li>
                                <li>Tire Degreasing</li>
                                <li>Mud Removal</li>
                                <li>Premium Tire Shine</li>
                            </ul>
                            <button className="btn-book-sm">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
