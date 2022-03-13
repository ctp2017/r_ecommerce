import React, { Component, Fragment } from 'react'
import OrderList from '../components/Cart/OrderList'

export class OrderListPage extends Component {
     constructor(){
          super();
          window.scroll(0,0)
          
          }
     render() {
          return (
               <Fragment>

                    <OrderList />

               </Fragment>
          )
     }
}

export default OrderListPage