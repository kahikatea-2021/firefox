import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

function Fox (props) {
  const { id } = useParams()
  const fox = props.foxes.map(fox =>
    fox.id === id
  )

  return (
    <>
      <h1>THIS IS THE FOX COMPONENT</h1>

      <img className=""src={fox.iconbig}></img>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    foxes: globalState.foxes,
    extinguisher: globalState.extinguisher
  }
}

export default connect(mapStateToProps)(Fox)
