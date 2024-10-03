import React from 'react';
import './LeadDetails.css';

const LeadDetails = () => {
  return (
    <div className="lead-details">
      <h3>Mamta Naik</h3>
      <p>Assigned to: Aniruddh Naidu</p>
      <div className="lead-actions">
        <button className="btn create-account">Create Account</button>
        <button className="btn create-contact">Create Contact</button>
      </div>
    </div>
  );
};

export default LeadDetails;
