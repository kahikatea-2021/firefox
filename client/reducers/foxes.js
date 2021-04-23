import { SET_FOXES } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOXES:
      return action.foxes
    default:
      return state
  }
}

export default reducer
