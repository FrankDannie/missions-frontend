import { fetchMissions } from '../../services/api';

export const SET_MISSIONS = 'SET_MISSIONS';

export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});

export const loadMissions = () => async (dispatch) => {
  try {
    const response = await fetchMissions();
    dispatch(setMissions(response.data));
  } catch (error) {
    console.error('Error loading missions:', error);
  }
};
