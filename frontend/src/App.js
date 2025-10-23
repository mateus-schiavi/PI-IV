import React from 'react';
import Page from './Components/Page'
import RunnerDashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route path="/dashboard" element={<RunnerDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
