import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  createMission,
  updateMission,
  fetchMissionById,
  fetchRobots,
} from '../../services/api'
import Labels from '../common/labels'
import './MissionForm.css'

const MissionForm = ({ missionId, onClose, onMissionUpdate }) => {
  // Initial state for mission
  const initialMissionState = { name: '', description: '', robot_id: '' }
  const [mission, setMission] = useState(initialMissionState)
  const [robots, setRobots] = useState([])

  // Fetch mission details and robots when component mounts or missionId changes
  useEffect(() => {
    if (missionId) {
      fetchMissionById(missionId).then((response) => {
        setMission(response.data || initialMissionState)
      })
    } else {
      setMission(initialMissionState)
    }
    fetchRobots().then((response) => {
      setRobots(response.data || [])
    })
  }, [missionId])

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setMission((prevMission) => ({ ...prevMission, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: mission.name,
      description: mission.description,
      robot_id: mission.robot_id,
    }
    if (missionId) {
      updateMission(missionId, payload)
        .then(() => {
          onMissionUpdate()
          setMission(initialMissionState) // Reset the form fields
          onClose()
        })
        .catch((error) => {
          console.error('Error updating mission:', error)
          // Optionally, set an error state here
        })
    } else {
      createMission(payload)
        .then(() => {
          onMissionUpdate()
          setMission(initialMissionState) // Reset the form fields
          onClose()
        })
        .catch((error) => {
          console.error('Error creating mission:', error)
          // Optionally, set an error state here
        })
    }
  }

  // Handle cancel button click
  const handleCancel = () => {
    setMission(initialMissionState)
    onClose()
  }

  return (
    <div className="form-container mission-form">
      <h2>
        {missionId ? Labels.mission.UPDATE_TITLE : Labels.mission.CREATE_TITLE}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          {Labels.mission.NAME}
          <input
            type="text"
            name="name"
            value={mission.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {Labels.mission.DESCRIPTION}
          <textarea
            name="description"
            value={mission.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {Labels.mission.ROBOT_SELECT}
          <select
            name="robot_id"
            value={mission.robot_id}
            onChange={handleChange}
            required
          >
            <option value="">{Labels.mission.SELECT_ROBOT}</option>
            {robots.map((robot) => (
              <option key={robot.id} value={robot.id}>
                {robot.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">
          {missionId ? Labels.mission.UPDATE : Labels.mission.CREATE}
        </button>
        <button type="button" onClick={handleCancel}>
          {Labels.CANCEL}
        </button>
      </form>
    </div>
  )
}

// Define PropTypes for the component
MissionForm.propTypes = {
  missionId: PropTypes.string, // Use PropTypes.string if ID is a string, otherwise adjust
  onClose: PropTypes.func.isRequired,
  onMissionUpdate: PropTypes.func.isRequired,
}

export default MissionForm
