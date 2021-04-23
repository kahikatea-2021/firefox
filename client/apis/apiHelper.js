import { getFoxes } from '../apis/foxes'
import { getExtinguishers } from '../apis/extinguishers'
import { setFoxes, setExtinguishers } from '../actions/index'

// export function fetchFoxes (dispatch) {
//     return dispatch => {
//         return getFoxes()
//           .then(foxes => {
//             dispatch(setFoxes(foxes))
//             return null
//           })
//       }
//     }

// export function fetchExtinguishers () {
//     return dispatch => {
//         return getExtinguishers()
//         .then(extinguishers => {
//             dispatch(setExtinguishers(extinguishers))
//             return null
//             })
//         }
//     }

export function fetchFoxes (dispatch) {
    return getFoxes()
    .then(foxes => {
        dispatch(setFoxes(foxes))
        return null
    })
    .catch(err => {
        console.log(err)
    })
}

export function fetchExtinguishers (dispatch) {
    return getExtinguishers()
    .then(extinguisher => {
        dispatch(setExtinguishers(extinguisher))
        return null
    })
    .catch(err => {
        console.log(err)
    })
}