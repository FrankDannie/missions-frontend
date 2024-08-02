import axios from 'axios'

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

// Fetch all missions
export const fetchMissions = () => api.get('/missions/')

// Fetch a specific mission by ID
export const fetchMissionById = (id) => api.get(`/missions/${id}`)

// Create a new mission
export const createMission = (data) => api.post('/missions/', data)

// Update an existing mission by ID
export const updateMission = (id, data) => api.put(`/missions/${id}`, data)

// Fetch all robots
export const fetchRobots = () => api.get('/robots/')

// Fetch a specific robot by ID
export const fetchRobotById = (id) => api.get(`/robots/${id}`)

// Create a new robot
export const createRobot = (data) => api.post('/robots/', data)

// Update an existing robot by ID
export const updateRobot = (id, data) => api.put(`/robots/${id}`, data)
