import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Test</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <input type="text" />
        </li>
        <li>
          <button>Settings</button>
        </li>
        <li>
          <button>Notifications</button>
        </li>
        <li>
          <button>Calender</button>
        </li>
      </ul>
      <div className="navbar-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-bell"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </nav>
  );
};

export default Navbar;
