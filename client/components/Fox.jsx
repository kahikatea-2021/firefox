import React from 'react'
import { connect } from 'react-redux'

function Fox (props) {
  return (
    <h1>THIS IS THE FOX COMPONENT</h1>
  )
}
const mapStateToProps = (globalState) => {
  return {
    foxes: globalState.foxes,
    extinguisher: globalState.extinguisher
  }
}

export default connect(mapStateToProps)(Fox)
