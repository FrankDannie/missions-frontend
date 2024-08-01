import React, { useState, useEffect } from 'react';
import {
  createMission,
  updateMission,
  fetchMissionById,
  fetchRobots,
} from '../../services/api';
import Labels from '../common/labels';
import './MissionForm.css';

const MissionForm = ({ missionId, onClose, onMissionUpdate }) => {
  const initialMissionState = { name: '', description: '', robot_id: '' };
  const [mission, setMission] = useState(initialMissionState);
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    if (missionId) {
      fetchMissionById(missionId).then((response) => {
        setMission(response.data || initialMissionState);
      });
    } else {
      setMission(initialMissionState);
    }
    fetchRobots().then((response) => {
      setRobots(response.data || []);
    });
  }, [missionId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMission((prevMission) => ({ ...prevMission, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: mission.name,
      description: mission.description,
      robot_id: mission.robot_id,
    };
    if (missionId) {
      updateMission(missionId, payload).then(() => {
        onMissionUpdate();
        setMission(initialMissionState); // Reset the form fields
        onClose();
      });
    } else {
      createMission(payload).then(() => {
        onMissionUpdate();
        setMission(initialMissionState); // Reset the form fields
        onClose();
      });
    }
  };

  const handleCancel = () => {
    setMission(initialMissionState);
    onClose();
  };

  return (
    <div className="form-container mission-form">
      <h2>
        {missionId
          ? Labels.mission.UPDATE_MISSION
          : Labels.mission.CREATE_MISSION}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          {Labels.mission.MISSION_NAME}
          <input
            type="text"
            name="name"
            value={mission.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {Labels.mission.MISSION_DESCRIPTION}
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
  );
};

export default MissionForm;
