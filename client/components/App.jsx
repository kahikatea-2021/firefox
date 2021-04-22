import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Foxes from './Foxes'
// import Fox from './Fox'
import Footer from './Footer'

import { fetchFruits } from '../actions'

function App(props) {
  return (
    <>
      <Header />
      <Foxes />
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(App)
