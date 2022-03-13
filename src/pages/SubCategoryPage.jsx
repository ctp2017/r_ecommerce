import React, { Component, Fragment } from 'react'
import SubCategory from '../components/Products/SubCategory'

export class SubCategoryPage extends Component {
  
  constructor() {
    super();
    window.scroll(0, 0)

  }

  render() {
    return (
      <Fragment>

        <SubCategory />

      </Fragment>
    )
  }
}

export default SubCategoryPage