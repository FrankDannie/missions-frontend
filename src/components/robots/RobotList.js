import React from 'react'
import PropTypes from 'prop-types'
import './RobotList.css'

const RobotList = ({ robots, onSelect }) => {
  // Display a message if no robots are available
  if (robots.length === 0) {
    return <p>No robots available.</p>
  }

  return (
    <div className="robot-table-container">
      <table className="robot-table" role="table">
        <thead>
          <tr>
            {/* Table headers */}
            <th>Robot Name</th>
            {/* Add more headers if necessary */}
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr
              key={robot.id}
              onClick={() => onSelect(robot.id)}
              role="row" // Define role for accessibility
              tabIndex="0" // Allow focus for better accessibility
            >
              <td>{robot.name}</td>
              {/* Add more data cells if necessary */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Define PropTypes to enforce correct data types and required fields
RobotList.propTypes = {
  robots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default RobotList
