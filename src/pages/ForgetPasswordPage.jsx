import React, { Component } from 'react'
import ForgetPassword from '../components/common/ForgetPassword'

export class ForgetPasswordPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
     <ForgetPassword/>
    )
  }
}

export default ForgetPasswordPage