import React from 'react'
import PropTypes from 'prop-types'
import './MissionList.css'

const MissionList = ({ missions, onSelect }) => {
  return (
    <div className="mission-table-container">
      <table className="mission-table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {missions.length === 0 ? (
            <tr>
              <td colSpan="1">No missions available</td>
            </tr>
          ) : (
            missions.map((mission) => (
              <tr
                key={mission.id}
                onClick={() => onSelect(mission.id)}
                role="button"
                className="mission-row"
              >
                <td>{mission.name || 'N/A'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

MissionList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default MissionList
