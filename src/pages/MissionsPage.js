import React, { useState, useEffect } from 'react'
import MissionList from '../components/missions/MissionList'
import MissionForm from '../components/forms/MissionForm'
import { fetchMissions } from '../services/api'
import './MissionPage.css'

const MissionsPage = () => {
  // State to hold missions data and the selected mission ID
  const [missions, setMissions] = useState([])
  const [selectedMissionId, setSelectedMissionId] = useState(null)

  // Fetch missions data on component mount
  useEffect(() => {
    fetchMissions().then((response) => setMissions(response.data))
  }, [])

  // Handle mission update and reset selectedMissionId
  const handleMissionUpdate = () => {
    fetchMissions().then((response) => setMissions(response.data))
    setSelectedMissionId(null)
  }

  return (
    <div className="missions-page">
      <h1 className="page-title">Missions</h1>
      <MissionForm
        missionId={selectedMissionId}
        onClose={() => setSelectedMissionId(null)}
        onMissionUpdate={handleMissionUpdate}
      />
      <div className="missions-content">
        <MissionList missions={missions} onSelect={setSelectedMissionId} />
      </div>
    </div>
  )
}

export default MissionsPage
