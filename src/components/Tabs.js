import React from 'react';
import './Tabs.css';

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="tab active">Basic Details</button>
      <button className="tab">Account Details</button>
      <button className="tab">Lead Deals</button>
      <button className="tab">Team</button>
      <button className="tab">Other Contacts</button>
    </div>
  );
};

export default Tabs;
