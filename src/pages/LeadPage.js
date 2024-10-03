import React from 'react';

const LeadHeader = ({ leadId, leadName, status }) => {
  return (
    <div>
      <h2>{leadId}</h2>
      <h3>{leadName}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default LeadHeader;
