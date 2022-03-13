import React, { Component, Fragment } from 'react'
import CartList from '../components/Cart/CartList'
import {Container} from 'react-bootstrap'
export class CartListPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
    <Fragment>

    <Container className="text-center" fluid={true}>
    <div className="section-title text-center mb-40"><h2> Cart List</h2>
         <p>Some Of Our Exclusive Collection, You May Like</p>
    </div>
</Container>



    <CartList/>
    
    
    </Fragment>
    )
  }
}

export default CartListPage