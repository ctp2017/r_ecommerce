import React, { Component, Fragment } from 'react'
import Notification from '../components/common/Notification'

export class NotificationPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)
    
    }
  render() {
    return (
   <Fragment>
   <Notification/>
   
   </Fragment>
    )
  }
}

export default NotificationPage