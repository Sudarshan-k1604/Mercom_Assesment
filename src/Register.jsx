import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    email: '', username: '', firstName: '', lastName: '', password: '', role: 'vendor', agreed: false
  });
  
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRegister = (e) => {
    e.preventDefault(); // Stop page reload
    
   
    if (!formData.agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

 
    localStorage.setItem(formData.email, JSON.stringify(formData));

    alert("Registration successful! Please log in.");

     navigate('/login');
  };

  return (
    <div className="form-page-container">
      <div className="form-box register-box">
        <h2>Register User</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Username *</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>First name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Last name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Password *</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="radio-group">
            <label>
              <input type="radio" name="role" value="vendor" checked={formData.role === 'vendor'} onChange={handleChange} /> Vendor
            </label>
            <label>
              <input type="radio" name="role" value="user" checked={formData.role === 'user'} onChange={handleChange} /> User
            </label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="agreed" name="agreed" checked={formData.agreed} onChange={handleChange} />
            <label htmlFor="agreed">I have read and agree to the website, terms and conditions</label>
          </div>

          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;