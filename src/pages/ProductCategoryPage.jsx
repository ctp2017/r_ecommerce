import React, { Component, Fragment } from 'react'
import ProductCategory from '../components/Products/ProductCategory'

export class ProductCategoryPage extends Component {

constructor(){
super();
window.scroll(0,0)

}



  render() {
    return (
     <Fragment>
     
     <ProductCategory/>


     
     
     </Fragment>
    )
  }
}

export default ProductCategoryPage