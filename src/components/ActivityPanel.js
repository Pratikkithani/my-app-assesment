import React from 'react';
import './ActivityPanel.css';

const ActivityPanel = () => {
  return (
    <div className="activity-panel">
      <h4>Activity</h4>
      <div className="activity-actions">
        <button className="btn log-call">Log a Call</button>
        <button className="btn email">Email</button>
        <button className="btn event">Event</button>
      </div>
      <form className="activity-form">
        <input type="text" placeholder="Subject" />
        <input type="date" />
        <input type="text" placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActivityPanel;
