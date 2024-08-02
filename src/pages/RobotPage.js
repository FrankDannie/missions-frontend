import React, { useState, useEffect } from 'react'
import RobotList from '../components/robots/RobotList'
import RobotForm from '../components/forms/RobotForm'
import { fetchRobots } from '../services/api'
import './RobotPage.css'

const RobotPage = () => {
  // State to hold robots data and the selected robot ID
  const [robots, setRobots] = useState([])
  const [selectedRobotId, setSelectedRobotId] = useState(null)

  // Fetch robots data on component mount
  useEffect(() => {
    fetchRobots().then((response) => setRobots(response.data))
  }, [])

  // Handle robot update and reset selectedRobotId
  const handleRobotUpdate = () => {
    fetchRobots().then((response) => setRobots(response.data))
    setSelectedRobotId(null) // Optional: Reset selectedRobotId after update
  }

  return (
    <div className="robot-page">
      <h1 className="page-title">Robots</h1>
      <RobotForm
        robotId={selectedRobotId}
        onClose={() => setSelectedRobotId(null)}
        onSubmit={handleRobotUpdate} // Ensure onSubmit is used here
      />
      <div className="robots-content">
        <RobotList
          robots={robots} // Pass the robots list here
          onSelect={setSelectedRobotId}
        />
      </div>
    </div>
  )
}

export default RobotPage
