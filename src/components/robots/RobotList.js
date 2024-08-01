import React from 'react';
import PropTypes from 'prop-types';
import './RobotList.css';

const RobotList = ({ robots, onSelect }) => {
  return (
    <div className="robot-table-container">
      <table className="robot-table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id} onClick={() => onSelect(robot.id)}>
              <td>{robot.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RobotList.propTypes = {
  robots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RobotList;
