import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createRobot, updateRobot, fetchRobotById } from '../../services/api'
import Labels from '../common/labels'
import './RobotForm.css'

const RobotForm = ({ robotId, onClose, onSubmit }) => {
  const [robot, setRobot] = useState({ name: '', model_name: '' })

  useEffect(() => {
    if (robotId) {
      fetchRobotById(robotId)
        .then((response) => {
          setRobot(response.data || { name: '', model_name: '' })
        })
        .catch((error) => {
          console.error('Failed to fetch robot data:', error)
          // Optionally handle the error state here
        })
    } else {
      setRobot({ name: '', model_name: '' })
    }
  }, [robotId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setRobot((prevRobot) => ({ ...prevRobot, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const action = robotId ? updateRobot(robotId, robot) : createRobot(robot)

    action
      .then(() => {
        if (onSubmit) onSubmit() // Trigger the submission actions
        setRobot({ name: '', model_name: '' }) // Reset the form fields
        onClose()
      })
      .catch((error) => {
        console.error('Failed to submit form:', error)
        // Optionally handle the error state here
      })
  }

  const handleCancel = () => {
    setRobot({ name: '', model_name: '' }) // Reset the form fields
    onClose()
  }

  return (
    <div className="form-container robot-form">
      <h2>{robotId ? Labels.robot.UPDATE_TITLE : Labels.robot.CREATE_TITLE}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {Labels.robot.NAME}:
          <input
            type="text"
            name="name"
            value={robot.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {Labels.robot.MODEL_NAME}:
          <input
            type="text"
            name="model_name"
            value={robot.model_name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">
          {robotId ? Labels.form.SUBMIT : Labels.form.SUBMIT}
        </button>
        <button type="button" onClick={handleCancel}>
          {Labels.CANCEL}
        </button>
      </form>
    </div>
  )
}

RobotForm.propTypes = {
  robotId: PropTypes.number, // Ensure this matches the type of robotId used
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default RobotForm
