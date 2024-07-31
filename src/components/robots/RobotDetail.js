import React, { useState, useEffect } from 'react';
import { fetchRobotById } from '../../services/api';

const RobotDetail = ({ robotId }) => {
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    const getRobot = async () => {
      const response = await fetchRobotById(robotId);
      setRobot(response.data);
    };
    getRobot();
  }, [robotId]);

  if (!robot) return <div>Loading...</div>;

  return (
    <div>
      <h2>Robot Detail</h2>
      <p>Name: {robot.name}</p>
      <p>Model Name: {robot.model_name}</p>
    </div>
  );
};

export default RobotDetail;
