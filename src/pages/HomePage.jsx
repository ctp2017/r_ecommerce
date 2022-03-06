import React, { Component, Fragment } from 'react'
import HomeTop from '../components/home/HomeTop'
import Categories from '../components/home/Categories'
import NewArrival from '../components/home/NewArrival'
import Collection from '../components/home/Collection'
import Featured from '../components/home/Featured'
export class HomePage extends Component {
     render() {
          return (
               <Fragment>
                    <HomeTop />
                    <Categories />
                    <NewArrival />

                    <Collection />
                    <Featured />



               </Fragment>
          )
     }
}

export default HomePage