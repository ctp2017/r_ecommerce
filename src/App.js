import React, { Component, Fragment } from 'react'
import '../src/assets/css/custom.css'


import TopNavbar from './components/TopNavbar'

import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import FavoratePage from './pages/FavoratePage'
export class App extends Component {
  render() {
    return (
      <Fragment>
        <TopNavbar />

    <FavoratePage/>



        <Footer />


      </Fragment>
    )
  }
}

export default App