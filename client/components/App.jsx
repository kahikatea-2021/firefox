import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Foxes from './Foxes'
import Fox from './Fox'
import Footer from './Footer'
import { fetchExtinguishers, fetchFoxes } from '../apis/apiHelper'

function App (props) {
  useEffect(() => {
    fetchFoxes(props.dispatch)
    fetchExtinguishers(props.dispatch)
  }, [])
  
  return (
    <>
      <Header />
      <Foxes />
      <Footer />
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    foxes: globalState.foxes,
    extinguishers: globalState.extinguishers
  }
}

export default connect(mapStateToProps)(App)
