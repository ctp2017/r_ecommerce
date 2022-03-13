import React, { Component, Fragment } from 'react'
import Footer from '../components/common/Footer'
import TopNavbar from '../components/TopNavbar'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import OrderListPage from '../pages/OrderListPage'
import SearchPage from '../pages/SearchPage'
import CartListPage from '../pages/CartListPage'
import FavoratePage from '../pages/FavoratePage'
import NotificationPage from '../pages/NotificationPage'
import LoginPage from '../pages/LoginPage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import RegisterPage from '../pages/RegisterPage'

import SubCategoryPage from '../pages/SubCategoryPage'


import ProductCategoryPage from '../pages/ProductCategoryPage'



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
          
          <Route exact path="/search" render={(props) => <SearchPage {...props} key={Date.now()} /> } />
          <Route exact path="/cardlist" render={(props) => <CartListPage {...props} key={Date.now()} /> } />
          
          <Route exact path="/favorate" render={(props) => <FavoratePage {...props} key={Date.now()} /> } />
          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} /> } />

          <Route exact path="/login" render={(props) => <LoginPage {...props} key={Date.now()} /> } />
          
          <Route exact path="/forgetpassword" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} /> } />

          <Route exact path="/register" render={(props) => <RegisterPage {...props} key={Date.now()} /> } />

          <Route exact path="/subcategory" render={(props) => <SubCategoryPage {...props} key={Date.now()} /> } />

          <Route exact path="/category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} /> } />

          
          











          <Route exact path="/about" component={AboutPage} />
           
         
        </Switch>


     <Footer/>
     
     
     
     </Fragment>
    )
  }
}

export default AppRouter