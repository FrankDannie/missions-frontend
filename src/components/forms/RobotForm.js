import React, { useState, useEffect } from 'react';
import { createRobot, updateRobot, fetchRobotById } from '../../services/api';
import './RobotForm.css';

const RobotForm = ({ robotId, onClose, onSubmit }) => {
  const [robot, setRobot] = useState({ name: '', model_name: '' });

  useEffect(() => {
    if (robotId) {
      fetchRobotById(robotId).then(response => setRobot(response.data));
    } else {
      setRobot({ name: '', model_name: '' });
    }
  }, [robotId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRobot(prevRobot => ({ ...prevRobot, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (robotId) {
      updateRobot(robotId, robot).then(() => {
        if (onSubmit) onSubmit(); // Trigger the submission actions
        setRobot({ name: '', model_name: '' }); // Reset the form fields
        onClose();
      });
    } else {
      createRobot(robot).then(() => {
        if (onSubmit) onSubmit(); // Trigger the submission actions
        setRobot({ name: '', model_name: '' }); // Reset the form fields
        onClose();
      });
    }
  };

  const handleCancel = () => {
    setRobot({ name: '', model_name: '' }); // Reset the form fields
    onClose();
  };

  return (
    <div className="form-container robot-form">
      <h2>{robotId ? 'Update Robot' : 'Create Robot'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={robot.name} onChange={handleChange} required />
        </label>
        <label>Model Name:
          <input type="text" name="model_name" value={robot.model_name} onChange={handleChange} required />
        </label>
        <button type="submit">{robotId ? 'Update' : 'Create'}</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default RobotForm;
