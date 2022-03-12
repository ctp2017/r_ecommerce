import React, { Component, Fragment } from 'react'
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import TopNavbar from '../components/TopNavbar'
import Footer from '../components/common/Footer';
import CartListPage from '../pages/CartListPage';
export class AppRouter extends Component {
     render() {
          return (
               <Fragment>
                    <TopNavbar />
                    
                    <Switch>

                         <Route exact path="/" component={HomePage} />
                         <Route exact path="/profile" component={CartListPage} />

                    </Switch>

                    <Footer />
               </Fragment>
          )
     }
}
export default AppRouter
