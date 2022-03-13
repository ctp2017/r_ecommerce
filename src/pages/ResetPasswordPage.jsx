import React, { Component ,Fragment} from 'react'
import ResetPassword from '../components/common/ResetPassword'

export class ResetPasswordPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
    <Fragment>
    
    <ResetPassword/>
    
    </Fragment>
    )
  }
}

export default ResetPasswordPage