import React, {useState} from 'react';
// import './compo/Sign/Signi/\n';
import './Signin.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const validateEmail = (email) => {
      // Basic email validation using a regular expression
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate email
      if (!email) {
        setEmailError('Please enter your email.');
        return;
      } else if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      } else {
        setEmailError('');
      }
  
      // Validate password
      if (!password) {
        setPasswordError('Please enter your password.');
        return;
      } else {
        setPasswordError('');
      }
  
      // Proceed with sign-in logic
      console.log('Sign in:', { email, password });
    };
  
    return (
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
}

export default Signin