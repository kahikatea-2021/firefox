import React from 'react'
import { connect } from 'react-redux'

function Foxes (props) {
  return (
    <>
      <div className="flex mx-16 inline-flex my-24">
        {props.foxes.map(fox => (
          <div key={fox.id}>
            <a className="1/3 m-8 p-32" href="https://www.youtube.com/watch?v=8LWLof0Crhg" target="blank">
              <img className=""src={fox.iconsmall}></img>
              <h1 className="text-4xl text-center text-orange-dark">{fox.name}</h1>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    foxes: globalState.foxes
  }
}

export default connect(mapStateToProps)(Foxes)
