import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { Link,useNavigate } from 'react-router-dom';

export const Loginp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Clear previous errors
    setMessage('');  // Clear previous messages

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),  // Send email and password to backend
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Login successful!');  
        navigate('/');// Display success message
        // You can redirect to another page or store the token if needed
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Login</h1>
          <form className="loginsignup-fields" onSubmit={handleSubmit}>
            <input 
              type="email" 
              value={email} 
              onChange={handleEmailChange} 
              name="email" 
              className="center-placeholder" 
              placeholder='Email Address' 
            />
            <input 
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
              name="password" 
              className="center-placeholder" 
              placeholder='Password' 
            />
            <button type="submit" className='b'>
              Login
            </button>

            {/* Display error or success messages */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}

            <p className="Loginsingup-login">
              Don't have an account?{' '}
              <Link to="/signup" className="login-link">
                Sign up
              </Link>
            </p>
          </form>
          <div className="loginsignup-agree">
            <input type="checkbox" name="agree" id="agree" />
            <p>By continuing I agree to the use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
