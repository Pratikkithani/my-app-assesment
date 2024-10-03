import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h2>LE-010071</h2>
      <div className="lead-status">
        <button className="btn btn-new">New</button>
        <button className="btn btn-contacted">Contacted</button>
        <button className="btn btn-qualified">Qualified</button>
        <button className="btn btn-unqualified">Unqualified</button>
      </div>
    </div>
  );
};

export default Header;
