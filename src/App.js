import React, { useState } from 'react';
import MissionList from './components/MissionList';
import MissionDetail from './components/MissionDetail';
import RobotForm from './components/RobotForm';
import MissionForm from './components/MissionForm';

const App = () => {
    const [selectedMissionId, setSelectedMissionId] = useState(null);

    return (
        <div className="App">
            <MissionList onSelect={setSelectedMissionId} />
            {selectedMissionId && <MissionDetail missionId={selectedMissionId} />}
            <RobotForm />
            <MissionForm />
        </div>
    );
};

export default App;
