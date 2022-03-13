import React, { Component, Fragment } from 'react'
import Favorate from '../components/common/Favorate'

export class FavoratePage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
     <Fragment>
     
     <Favorate/>
     </Fragment>
    )
  }
}

export default FavoratePage