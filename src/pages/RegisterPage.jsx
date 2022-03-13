import React, { Component, Fragment } from 'react'
import Register from '../components/common/Register'

export class RegisterPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
     <Fragment>
     
     <Register/>
     
     </Fragment>
    )
  }
}

export default RegisterPage