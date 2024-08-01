import React from 'react';
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

export default RobotList;
