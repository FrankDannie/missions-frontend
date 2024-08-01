import React from 'react';
import '../common/Modal.css';

const RobotDetailModal = ({ robot, onClose }) => {
  if (!robot) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{robot.name}</h2>
        <p>
          <strong>Model:</strong> {robot.model_name}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RobotDetailModal;
