import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MissionsPage from '../pages/MissionsPage';
import RobotPage from '../pages/RobotPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/missions" element={<MissionsPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/robots" element={<RobotPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
