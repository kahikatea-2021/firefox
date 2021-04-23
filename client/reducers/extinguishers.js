import { SET_EXTINGUISHERS } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXTINGUISHERS:
      return action.extinguishers
    default:
      return state
  }
}

export default reducer
