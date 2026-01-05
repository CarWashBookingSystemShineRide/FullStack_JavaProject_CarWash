import React from 'react'
// Footer removed

export default function Pricing() {
    return (
        <div className="page-wrap">
            <div className="pricing-section">
                <div className="pricing-header">
                    <h1>Transparent Pricing</h1>
                    <p>Choose the package that fits your needs. All services include premium products and satisfaction guarantee.</p>
                </div>

                <div className="pricing-grid">
                    {/* Basic Wash */}
                    <div className="pricing-card">
                        <h2>Basic Wash</h2>
                        <p className="desc">Essential exterior cleaning</p>
                        <div className="price-wrap">
                            <span style={{ fontSize: 18, color: '#8a6f66' }}>Just </span>
                            <span className="price">₹599</span>
                        </div>
                        <div className="duration">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            30 min
                        </div>
                        <ul className="features-list">
                            <li><span className="check-icon">✓</span> Exterior foam wash</li>
                            <li><span className="check-icon">✓</span> Wheel & tire cleaning</li>
                            <li><span className="check-icon">✓</span> Window cleaning</li>
                            <li><span className="check-icon">✓</span> Hand dry finish</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>

                    {/* Premium Wash */}
                    <div className="pricing-card popular">
                        <div className="popular-badge">
                            <span>★</span> Most Popular
                        </div>
                        <h2>Premium Wash</h2>
                        <p className="desc">Complete interior & exterior care</p>
                        <div className="price-wrap">
                            <span style={{ fontSize: 18, color: '#8a6f66' }}>Just </span>
                            <span className="price">₹999</span>
                        </div>
                        <div className="duration">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            1.5 hours
                        </div>
                        <ul className="features-list">
                            <li><span className="check-icon">✓</span> Everything in Basic</li>
                            <li><span className="check-icon">✓</span> Interior vacuum</li>
                            <li><span className="check-icon">✓</span> Dashboard & console wipe</li>
                            <li><span className="check-icon">✓</span> Leather conditioning</li>
                            <li><span className="check-icon">✓</span> Tire shine</li>
                            <li><span className="check-icon">✓</span> Air freshener</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>

                    {/* Ultimate Detail */}
                    <div className="pricing-card">
                        <h2>Ultimate Detail</h2>
                        <p className="desc">Full professional detailing</p>
                        <div className="price-wrap">
                            <span style={{ fontSize: 18, color: '#8a6f66' }}>Just </span>
                            <span className="price">₹2999</span>
                        </div>
                        <div className="duration">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            3+ hours
                        </div>
                        <ul className="features-list">
                            <li><span className="check-icon">✓</span> Everything in Premium</li>
                            <li><span className="check-icon">✓</span> Clay bar treatment</li>
                            <li><span className="check-icon">✓</span> Hand wax protection</li>
                            <li><span className="check-icon">✓</span> Engine bay cleaning</li>
                            <li><span className="check-icon">✓</span> Headlight restoration</li>
                            <li><span className="check-icon">✓</span> Paint sealant</li>
                            <li><span className="check-icon">✓</span> Odor elimination</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
