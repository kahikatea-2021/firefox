import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFoxes } from '../actions'

import Header from './Header'
import Foxes from './Foxes'
// import Fox from './Fox'
import Footer from './Footer'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFoxes())
  }, [])

  return (
    <>
      {/* <div className='app'> */}
      <Header />
      <Foxes />
      <Footer />
      {/* <ul>
          {props.foxes.map(fox => (
            <li key={fox}>{fox}</li>
          ))}
        </ul> */}
      {/* </div> */}
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    foxes: globalState.foxes
  }
}

export default connect(mapStateToProps)(App)
