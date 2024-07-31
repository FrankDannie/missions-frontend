import React, { useState, useEffect } from 'react';
import RobotList from '../components/robots/RobotList';
import RobotDetail from '../components/robots/RobotDetail';
import RobotForm from '../components/forms/RobotForm';
import { fetchRobots } from '../services/api';
import './RobotPage.css';

const RobotPage = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  useEffect(() => {
    fetchRobots().then(response => setRobots(response.data));
  }, []);

  const handleRobotUpdate = () => {
    fetchRobots().then(response => setRobots(response.data));
  };

  return (
    <div className="robot-page">
      <h1 className="page-title">Robots</h1>
      <RobotForm
        robotId={selectedRobotId}
        onClose={() => setSelectedRobotId(null)}
        onSubmit={handleRobotUpdate} // Ensure onSubmit is used here
      />
      <div className="robots-content">
        <RobotList
          robots={robots} // Pass the robots list here
          onSelect={setSelectedRobotId}
        />
        {selectedRobotId && <RobotDetail robotId={selectedRobotId} />}
      </div>
    </div>
  );
};

export default RobotPage;
