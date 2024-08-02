import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MissionsPage from '../pages/MissionsPage'
import RobotPage from '../pages/RobotPage'

// AppRouter component defines application routing
const AppRouter = () => (
  <Router>
    <Routes>
      {/* Route for missions page */}
      <Route path="/missions" element={<MissionsPage />} />
      {/* Route for home page */}
      <Route path="/" element={<HomePage />} />
      {/* Route for robots page */}
      <Route path="/robots" element={<RobotPage />} />
    </Routes>
  </Router>
)

export default AppRouter
