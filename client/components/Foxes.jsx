import React from 'react'
import { connect } from 'react-redux'

function Foxes (props) {
  console.log(props.foxes)
  return (
    <>
      <div className="flex inline-flex">
        {props.foxes.map(fox => (
          <div key={fox.id}>
            <a className="1/3 m-8"link>
              <img className=""src={fox.iconsmall}></img>
              <h1 className="text-center text-orange-dark">{fox.name}</h1>
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
