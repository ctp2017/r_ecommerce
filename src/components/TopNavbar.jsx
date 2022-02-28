import React, { Component, Fragment } from 'react'
import"../assets/css/custom.css"
import {Container,Navbar} from'react-bootstrap'
import Logo from'../assets/images/ctp.png'

export class TopNavbar extends Component {
  render() {
    return (
    <Fragment>

   
    <Navbar expand="lg" variant="light" bg="light">
      <Container fluid={true}>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block "
        />{' '}
      Creative Team
      </Navbar.Brand>
      </Container>
    </Navbar>
  






    </Fragment>
    )
  }
}

export default TopNavbar