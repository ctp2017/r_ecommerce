import React, { Component, Fragment } from 'react'
import"../assets/css/custom.css"
import {Container,Navbar,Form,FormControl,Button} from'react-bootstrap'
import Logo from'../assets/images/ctp.png'
import"../assets/css/fontawesome.css"

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

   

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-0"
          aria-label="Search"
        />
        <Button variant="outline-success"><i className="fa fa-search"></i></Button>
      </Form>

      <Button variant="outline-success"><i className="fa fa-shopping-cart"></i> items 0 </Button>


      <a herf=""><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">0</span></sup>  </a>

      <a herf=""><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">8</span></sup>  </a>
    

      <a herf=""><i className="fa h4 fa-share" ></i> </a>
      <a herf=""><i className="fa h4 fa-address-card" ></i> </a>
     
     

      </Container>
    </Navbar>
  






    </Fragment>
    )
  }
}

export default TopNavbar