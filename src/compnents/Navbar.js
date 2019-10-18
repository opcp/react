import React from 'react'
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
  } from 'react-bootstrap'
  import {LinkContainer} from 'react-router-bootstrap'

const my_Navbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Router範例</Navbar.Brand>
        <Nav className="mr-auto">

        <LinkContainer to="/" exact activeClassName="active">
          <Nav.Link >首頁</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/News" exact activeClassName="active">
          <Nav.Link >新聞</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Contact" exact activeClassName="active">
          <Nav.Link >聯絡</Nav.Link>
          </LinkContainer>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default my_Navbar
