import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchMissions = () => api.get('/missions/');
export const fetchMissionById = (id) => api.get(`/missions/${id}`);
export const createMission = (data) => api.post('/missions/', data);
export const updateMission = (id, data) => api.put(`/missions/${id}`, data);

export const fetchRobots = () => api.get('/robots/');
export const fetchRobotById = (id) => api.get(`/robots/${id}`);
export const createRobot = (data) => api.post('/robots/', data);
export const updateRobot = (id, data) => api.put(`/robots/${id}`, data);
