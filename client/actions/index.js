import { getFoxes } from '../apis/foxes'

export const SET_FOXES = 'SET_FOXES'

export function setFoxes (foxes) {
  return {
    type: SET_FOXES,
    foxes
  }
}

export function fetchFoxes () {
  return dispatch => {
    return getFoxes()
      .then(efoxs => {
        dispatch(setFoxes(efoxs))
        return null
      })
  }
}
