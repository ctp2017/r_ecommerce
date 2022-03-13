import React, { Component, Fragment } from 'react'
import UserLogin from '../components/common/UserLogin'

export class LoginPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
    <Fragment>
    
    <UserLogin/>
    
    </Fragment>
    )
  }
}

export default LoginPage