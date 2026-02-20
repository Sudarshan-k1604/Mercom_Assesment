import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Initialize the navigate tool
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    const savedUserString = localStorage.getItem(email);

    if (savedUserString) {
     
      const savedUser = JSON.parse(savedUserString);

     if (savedUser.password === password) {
        alert(`Welcome back, ${savedUser.username}!`);
        
      
        localStorage.setItem("currentUser", savedUser.username);
        
       navigate('/');
      } else {
        alert("Incorrect password. Please try again.");
      }
    } else {
      alert("No account found with this email. Please register first.");
    }
  };

  return (
    <div className="form-page-container">
      <div className="form-box">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit" className="submit-button">LOG IN</button>
        </form>

        <div className="extra-links">
          <Link to="/register">Register</Link> | <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;