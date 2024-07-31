import React, { useState, useEffect } from 'react';
import { fetchMissionById } from '../../services/api';

const MissionDetail = ({ missionId }) => {
  const [mission, setMission] = useState(null);

  useEffect(() => {
    fetchMissionById(missionId)
      .then(response => setMission(response.data))
      .catch(error => console.error('Error fetching mission details:', error));
  }, [missionId]);

  if (!mission) return <p>Loading...</p>;

  const { name, description, robot } = mission;
  const robotName = robot?.name || 'N/A';
  const robotModelName = robot?.model_name || 'N/A';

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Robot: {robotName} ({robotModelName})</p>
    </div>
  );
};

export default MissionDetail;
