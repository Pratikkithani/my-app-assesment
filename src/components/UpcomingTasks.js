import React from 'react';
import './UpcomingTasks.css';

const UpcomingTasks = () => {
  return (
    <div className="upcoming-tasks">
      <h4>Upcoming & Overdue</h4>
      <ul>
        <li>
          <span>Arrange a Call</span>
          <span>Start: 27/08/2024 12:00pm</span>
        </li>
        <li>
          <span>Follow Up Email</span>
          <span>Start: 27/08/2024 01:00pm</span>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingTasks;
