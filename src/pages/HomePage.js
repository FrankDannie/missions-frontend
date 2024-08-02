import React from 'react'
import { Link } from 'react-router-dom'
import Labels from '../components/common/labels'
import './HomePage.css'

// HomePage component renders the main page layout with navigation cards
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Page title */}
      <h1 className="page-title">{Labels.WELCOME_MESSAGE}</h1>
      {/* Container for navigation cards */}
      <div className="card-container">
        {/* Card for missions */}
        <Link to="/missions" className="card">
          <h2>{Labels.MISSIONS_TITLE}</h2>
          <p>{Labels.MISSION_DESCRIPTION}</p>
        </Link>
        {/* Card for robots */}
        <Link to="/robots" className="card">
          <h2>{Labels.ROBOT_TITLE}</h2>
          <p>{Labels.ROBOT_DESCRIPTION}</p>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
