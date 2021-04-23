import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

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
      <Route path='/' component={Header} />
      <Route exact path='/' component={Foxes} />
      <Route exact path='/:id' component={Fox} />
      <Route path='/' component={Footer} />
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
