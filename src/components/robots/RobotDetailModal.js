import React from 'react'
import '../common/Modal.css'

const RobotDetailModal = ({ robot, onClose }) => {
  if (!robot) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{robot.name}</h2>
        <p>
          <strong>Model:</strong> {robot.model_name}
        </p>
        <button onClick={onClose} aria-label="Close">
          Close
        </button>
      </div>
    </div>
  )
}

export default RobotDetailModal
