import React from 'react'
import { connect } from 'react-redux'

function Fox (props) {
  console.log(props)
  return (
    <>
      <div className="flex mx-16 inline-flex my-24">
        {props.extinguisher.map(extinguisher => (
          <div key={extinguisher.id}>
            <h1 className="text-4xl text-center text-orange-dark">{extinguisher.name}</h1>
          </div>
        ))}
      </div>
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
