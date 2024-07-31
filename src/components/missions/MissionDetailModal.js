import React from 'react';
import '../common/Modal.css';

const MissionDetailModal = ({ mission, onClose }) => {
  if (!mission) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{mission.name}</h2>
        <p><strong>Description:</strong> {mission.description}</p>
        <p><strong>Robot:</strong> {mission.robot.name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MissionDetailModal;
