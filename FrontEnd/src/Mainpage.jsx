import React, { useState } from 'react'

export default function Mainpage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder - integrate auth later
    console.log('Sign in', { email, password })
  }

  return (
    <div>
      <header className="site-header">
        <div className="site-brand">
          <div className="logo-box">🚗</div>
          <div>
            <div style={{fontSize:18}}>LuxeWash</div>
            <div style={{fontSize:11, marginTop:2}}>Premium Car Care</div>
          </div>
        </div>
        <nav className="site-nav">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Service</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">Contact</a>
          <a className="nav-link" href="#">Login</a>
          <a className="nav-link register" href="#">Register</a>
        </nav>
      </header>

      <main className="page-wrap">
        <div className="signin-wrapper">
          <div className="signin-card">
            <h2>Welcome Back</h2>
            <p className="lead">Sign in to access your account</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="email">Email Address</label>
                <input id="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} placeholder="john@example.com" />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="•••••••" />
              </div>

              <div className="form-actions">
                <label className="remember"><input type="checkbox" /> Remember Me</label>
                <a className="forgot" href="#">Forgot password?</a>
              </div>

              <div style={{textAlign:'center', marginTop:18}}>
                <button type="submit" className="btn-primary">Sign In</button>
              </div>
            </form>

            <div style={{textAlign:'center', marginTop:12, fontSize:12, color:'#8a6f66'}}>Don't have an account? <a href="#">Register now</a></div>

            <div className="btn-social">
              <button aria-label="Continue with Google">G continue with Google</button>
              <button aria-label="Continue with Apple"> continue with Apple</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
