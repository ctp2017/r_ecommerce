import React, { Component, Fragment } from 'react'
import Footer from '../components/common/Footer'
import TopNavbar from '../components/TopNavbar'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import OrderListPage from '../pages/OrderListPage'

import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
   } from "react-router-dom";

export class AppRouter extends Component {
  render() {
    return (
     <Fragment>
     
     <TopNavbar/>


     <Switch>

        

          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} /> } />

          <Route exact path="/profile" render={(props) => <OrderListPage {...props} key={Date.now()} /> } />
          
         

          <Route exact path="/about" component={AboutPage} />
           
         
        </Switch>


     <Footer/>
     
     
     
     </Fragment>
    )
  }
}

export default AppRouter