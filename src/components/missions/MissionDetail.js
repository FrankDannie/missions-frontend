import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchMissionById } from '../../services/api'

const MissionDetail = ({ missionId }) => {
  const [mission, setMission] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const response = await fetchMissionById(missionId)
        setMission(response.data)
      } catch (error) {
        setError('Error fetching mission details.')
        console.error('Error fetching mission details:', error)
      }
    }

    fetchMission()
  }, [missionId])

  if (error) return <p>{error}</p>
  if (!mission) return <p>Loading...</p>

  const { name, description, robot } = mission
  const robotName = robot?.name || 'N/A'
  const robotModelName = robot?.model_name || 'N/A'

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Robot: {robotName} ({robotModelName})
      </p>
    </div>
  )
}

MissionDetail.propTypes = {
  missionId: PropTypes.string.isRequired, // Adjust type based on actual ID type
}

export default MissionDetail
