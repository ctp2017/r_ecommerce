import React, { Component, Fragment } from 'react'
import SearchProduct from '../components/Products/SearchProduct'

export class SearchPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
    <Fragment>
    
    <SearchProduct/>
    
    
    </Fragment>
    )
  }
}

export default SearchPage