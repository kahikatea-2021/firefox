export const SET_FOXES = 'SET_FOXES'
export const SET_EXTINGUISHERS = 'SET_EXTINGUISHERS'

export function setFoxes (foxes) {
  return {
    type: SET_FOXES,
    foxes
  }
}

export function setExtinguishers (extinguishers) {
  return {
    type: SET_EXTINGUISHERS,
    extinguishers
  }
}
