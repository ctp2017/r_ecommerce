import React, { Component, Fragment } from 'react'
import"../assets/css/custom.css"
import {Container,Col,Navbar,Form,FormControl,Button} from'react-bootstrap'
import Logo from'../assets/images/ctp.png'
import"../assets/css/fontawesome.css"
import { Link } from "react-router-dom";
export class TopNavbar extends Component {
  render() {
    return (
    <Fragment>
    <Navbar  variant="light" className="navbar" >

      <Container fluid={true}>
      <Col lg={3} md={4} sm={12} xs={12}>
      <Navbar.Brand href="#home">
        <Link to="/"><img
          alt=""
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block "
        /></Link>
        {' '}
      Creative Team
      </Navbar.Brand>
</Col>


<Col lg={4} md={4} sm={12} xs={12}>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-0"
          aria-label="Search"
        />
        <Link to="/search" className="Search-btn"><i className="fa fa-search"></i></Link>
      </Form>
</Col>


      <Link to="/cardlist" className="cart-btn"><i className="fa fa-shopping-cart"></i> items 0 </Link>
      <Link to="/favorate"  herf=""><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">0</span></sup>  </Link>
      <Link to="/notification" herf=""><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">8</span></sup>  </Link>
      <Link to="/login" className='user-icon'  herf=""><i className="fa fa-share" ></i> </Link>
      <Link to="/profile"  className='user-icon'  herf=""><i className="fa h4 fa-address-card" ></i> </Link>



      </Container>
    </Navbar>
    </Fragment>
    )
  }
}
export default TopNavbar