import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

 const handleCreateEventClick = () => {
  
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo-main">MERCOM</span>
          <br/>
          <span className="logo-sub">clean energy insights</span>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Events</Link></li>
        <li><Link to="/">Venues</Link></li>
        <li><Link to="/">Contact Us</Link></li>
      </ul>
      
      <div className="nav-buttons">
        <Link to="/login" className="login-link">Login</Link>
        <span className="divider"> | </span>
        <Link to="/register" className="register-link">Register</Link>
        
        {}
        <button className="create-event-btn" onClick={handleCreateEventClick}>
          + Create Event
        </button>
      </div>
    </nav>
  );
}

export default Navbar;