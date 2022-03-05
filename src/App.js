import React, { Component, Fragment } from 'react'
import'../src/assets/css/custom.css'

import HomeTop from './components/home/HomeTop'
import Categories from './components/home/Categories'
import NewArrival from './components/home/NewArrival'
import TopNavbar from './components/TopNavbar'
import Collection from './components/home/Collection'
import Featured from './components/home/Featured'
export class App extends Component {
  render() {
    return (
    <Fragment>
    <TopNavbar/>

    <HomeTop/>
  <Categories/>
  <NewArrival/>

  <Collection/>
  <Featured/>
   
    
    </Fragment>
    )
  }
}

export default App