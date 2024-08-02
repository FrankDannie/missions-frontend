import React, { useState, useEffect } from 'react'
import { fetchRobotById } from '../../services/api'

const RobotDetail = ({ robotId }) => {
  const [robot, setRobot] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRobot = async () => {
      try {
        const response = await fetchRobotById(robotId)
        setRobot(response.data)
      } catch (err) {
        setError('Error fetching robot details')
      } finally {
        setLoading(false)
      }
    }
    getRobot()
  }, [robotId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!robot) return <div>No robot data available</div>

  return (
    <div>
      <h2>Robot Detail</h2>
      <p>
        <strong>Name:</strong> {robot.name || 'N/A'}
      </p>
      <p>
        <strong>Model Name:</strong> {robot.model_name || 'N/A'}
      </p>
    </div>
  )
}

export default RobotDetail
