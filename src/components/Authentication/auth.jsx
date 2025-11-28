import { useState, useEffect } from 'react';
import { FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const BACKEND_BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_BACKEND_URL)
  ? String(import.meta.env.VITE_BACKEND_URL).replace(/\/+$/, '') + '/api'
  : 'https://backend-production-afe71.up.railway.app/api';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);
  const navigate = useNavigate();

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
    setShowSignInPassword(false);
    setShowSignUpPassword(false);
    setShowSignUpConfirmPassword(false);
  };

  const handleSignIn = async (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      alert('Please enter your email and password');
      return;
    }
    setSignInLoading(true);
    try {
      const res = await fetch(`${BACKEND_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password }),
      });
      if (!res.ok) {
        const msg = await res.json().catch(() => ({}));
        throw new Error(msg.message || 'Invalid credentials');
      }
      const data = await res.json();
      localStorage.setItem('pl_auth_token', data.token);
      localStorage.setItem('pl_auth_user', JSON.stringify(data.user));
      window.location.href = DASHBOARD_URL;
    } catch (err) {
      alert(err.message || 'Sign in failed');
    } finally {
      setSignInLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (username && password && email && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      try {
        setSignUpLoading(true);
        const trimmedName = username.trim();
        const trimmedEmail = email.trim().toLowerCase();
        if (!trimmedName || !trimmedEmail) {
          alert('Please provide a valid name and email');
          setSignUpLoading(false);
          return;
        }
        const res = await fetch(`${BACKEND_BASE}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: trimmedName,
            lastName: '',
            email: trimmedEmail,
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
      } finally {
        setSignUpLoading(false);
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
                <div className="input-group password-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type={showSignUpPassword ? 'text' : 'password'} 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowSignUpPassword((prev) => !prev)}
                    aria-label={showSignUpPassword ? 'Hide password' : 'Show password'}
                  >
                    {showSignUpPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="input-group password-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type={showSignUpConfirmPassword ? 'text' : 'password'} 
                    placeholder="Confirm password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowSignUpConfirmPassword((prev) => !prev)}
                    aria-label={showSignUpConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showSignUpConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <button type="submit" className="auth-btn" disabled={signUpLoading}>
                  {signUpLoading ? 'Creating account...' : 'Sign up'}
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
                <div className="input-group password-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input 
                    type={showSignInPassword ? 'text' : 'password'} 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowSignInPassword((prev) => !prev)}
                    aria-label={showSignInPassword ? 'Hide password' : 'Show password'}
                  >
                    {showSignInPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
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
                <button type="submit" className="auth-btn" disabled={signInLoading}>
                  {signInLoading ? 'Signing in...' : 'Sign in'}
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