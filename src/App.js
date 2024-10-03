// src/App.js
import React from 'react';
import Header from './components/Header';
import LeadDetails from './components/LeadDetails';
import Tabs from './components/Tabs';
import ActivityPanel from './components/ActivityPanel';
import StageHistory from './components/StageHistory';
import UpcomingTasks from './components/UpcomingTasks';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <LeadDetails />
      <Tabs />
      <div className="main-content">
        <ActivityPanel />
        <StageHistory />
        <UpcomingTasks />
      </div>
    </div>
  );
}

export default App;
