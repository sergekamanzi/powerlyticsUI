import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const BACKEND_BASE = 'http://localhost:4000/api';
  const DASHBOARD_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_DASHBOARD_URL) || 'https://energy-consumption-dashboard.vercel.app/';

  // Success UI state (signup)
  const [signupSuccess, setSignupSuccess] = useState({ show: false, title: 'Account created!', message: 'Redirecting to your dashboard...' });

  // Small clickable logo badge used above each form
  const LogoBadge = () => (
    <div
      className="auth-logo"
      onClick={() => navigate('/')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/'); }}
      aria-label="Go to home"
    >
      <img src="/logo3.png" alt="Powerlytics logo" className="auth-logo-img" />
      <span className="auth-logo-text">Powerlytics</span>
    </div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSignIn(true);
    }, 200);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    // Clear form when switching modes
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  };

  const handleSignIn = (e) => {
    // Instant redirect to Dashboard (no credential entry required)
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    window.location.href = DASHBOARD_URL;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (username && password && email && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      try {
        const res = await fetch(`${BACKEND_BASE}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: username,
            lastName: '',
            email,
            password,
          })
        });
        if (!res.ok) {
          const msg = await res.json().catch(() => ({}));
          throw new Error(msg.message || `Sign up failed (HTTP ${res.status})`);
        }
        const data = await res.json();
        localStorage.setItem('pl_auth_token', data.token);
        localStorage.setItem('pl_auth_user', JSON.stringify(data.user));
        // Show success popup then redirect
        setSignupSuccess({ show: true, title: 'Account created successfully', message: 'Welcome to Powerlytics! Taking you to your dashboard...' });
        setTimeout(() => { window.location.href = DASHBOARD_URL; }, 1400);
      } catch (err) {
        alert(err.message || 'Sign up failed');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
    <div className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`} id="container">
      <div className="row">
        {/* Sign Up Form Column */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <LogoBadge />
              <div className="form-header">
                <h2>Create an Account</h2>
                <p>Join us today and get started</p>
              </div>
              <form onSubmit={handleSignUp}>
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className='bx bx-mail-send'></i>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type="password" 
                    placeholder="Confirm password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="auth-btn">
                  Sign up
                </button>
              </form>
              <p className="auth-switch">
                <span>
                  Already have an account?
                </span>
                <b onClick={toggleAuthMode} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        
        {/* Sign In Form Column */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <LogoBadge />
              <div className="form-header">
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <b className="pointer forgot-password">
                    Forgot password?
                  </b>
                </div>
                <button type="button" onClick={handleSignIn} className="auth-btn">
                  Sign in
                </button>
              </form>
              {!isMobile && (
                <p className="auth-switch">
                  <span>
                    Don't have an account?
                  </span>
                  <b onClick={toggleAuthMode} className="pointer">
                    Sign up here
                  </b>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Row with Background and Text */}
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>
              Welcome onboard<br />Powerlytics Rwanda
            </h2>
            <p>Sign in to access your dashboard</p>
          </div>
          <div className="img sign-in">
            <div className="img-placeholder"></div>
          </div>
        </div>
        
        <div className="col align-items-center flex-col">
          <div className="img sign-up">
            <div className="img-placeholder"></div>
          </div>
          <div className="text sign-up">
            <h2>
              Join Our Community
            </h2>
            <p>Create your account and get started</p>
          </div>
        </div>
      </div>

      {/* Mobile Auth Switch */}
      {isMobile && (
        <div className="mobile-auth-switch">
          <p>
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <b onClick={toggleAuthMode} className="pointer">
              {isSignIn ? " Sign up here" : " Sign in here"}
            </b>
          </p>
        </div>
      )}
    </div>
    {signupSuccess.show && (
      <div className="success-overlay" role="alertdialog" aria-modal="true" aria-label="Signup successful">
        <div className="success-card">
          <FaCheckCircle className="success-icon" aria-hidden="true" />
          <h3>{signupSuccess.title}</h3>
          <p>{signupSuccess.message}</p>
          <button className="success-btn" onClick={() => { window.location.href = DASHBOARD_URL; }}>Continue</button>
        </div>
      </div>
    )}
    </>
  );
};

export default Auth;