import React from 'react'
import PropTypes from 'prop-types'
import '../common/Modal.css'

const MissionDetailModal = ({ mission, onClose }) => {
  if (!mission) return null

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 id="modal-title">{mission.name}</h2>
        <p>
          <strong>Description:</strong> {mission.description}
        </p>
        <p>
          <strong>Robot:</strong> {mission.robot.name}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

MissionDetailModal.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    robot: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
}

export default MissionDetailModal
