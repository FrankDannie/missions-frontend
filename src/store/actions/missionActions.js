import { fetchMissions } from '../../services/api'

export const SET_MISSIONS = 'SET_MISSIONS'

export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
})

/**
 * Thunk action creator for loading missions from the API.
 *
 * This function fetches missions data using the `fetchMissions` API call,
 * and dispatches the `setMissions` action with the fetched data.
 * If an error occurs during the fetch, it is logged to the console.
 *
 * @returns {Function} A thunk function that performs the API call and dispatches the action.
 */
export const loadMissions = () => async (dispatch) => {
  try {
    const response = await fetchMissions()
    dispatch(setMissions(response.data))
  } catch (error) {
    console.error('Error loading missions:', error)
  }
}
