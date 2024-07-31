import React from 'react';
import './MissionList.css';

const MissionList = ({ missions, onSelect }) => {
  return (
    <div className="mission-table-container">
      <table className="mission-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(mission => (
            <tr key={mission.id} onClick={() => onSelect(mission.id)}>
              <td>{mission.name || 'N/A'}</td>
              <td>{mission.description || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
