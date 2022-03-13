import React, { Component, Fragment } from 'react'
import ProductsDetails from '../components/Products/ProductsDetails'

export class ProductDetailsPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
     <Fragment>
     
     <ProductsDetails/>
     
     
     
     </Fragment>
    )
  }
}

export default ProductDetailsPage