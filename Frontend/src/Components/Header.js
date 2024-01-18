import React, { useRef } from 'react';
import logo from '../Images/Mepco-GyanMitra.png';
import '../Images/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown,DropdownButton,Dropdown} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/userActions';
function Header() {
  //change the navbar once the user get logged in
  const {isAuthenticated,user}=useSelector(state=>state.authState);
  // const{workshops:workshopRegistered} =useSelector(state=>state.workshopregState)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const logoutHandler=()=>
  {
    dispatch(logout);
  }
  return (
    <Navbar id="Navbar1" expand="lg" className="bg-body-tertiary"  style={{borderBottom:'1px solid ',boxShadow:'rgb(15, 92, 110) 0px 20px 30px -22px'}}>
      <Container >
        <Navbar.Brand href="#Home" 
        ><a className="basic-navbar-nav" href="/" style={{textDecoration:'none'}}>
          <img src={logo} style={{width:"92px", height:"43px"}} alt="Logo" /> <p className='d-none d-lg-inline-block' style={{color:'white',fontSize:'15px',fontFamily:'Poppins'}}>Mepco Schlenk Engineering College</p>
        </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'white',padding:'3px'}}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto " id="navbarSupportedContent">
            <Nav.Link href="/#Home" >Home</Nav.Link>
            <Nav.Link href="/workshop" >Workshops</Nav.Link>
            <Nav.Link href="/event" >Events</Nav.Link>
            <Nav.Link href="/#about" >About Us</Nav.Link>
            <Nav.Link href="/#location" >Contact Us</Nav.Link>

            </Nav>
            <Nav className="ms-auto" id="navbarSupportedContent">
  {isAuthenticated ? (
    <Dropdown className='d-inline'>
        <Dropdown.Toggle variant='default text-warning pr-5' id='dropdown-basic'>
          Hello {user.name}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item className='text-dark' onClick={()=>navigate('/myprofile')}>My Profile</Dropdown.Item>

          <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  ) : (
    <>
      <Link to="/login" className="btn p-2 my-lg-0 my-2 ms-auto" style={{ fontFamily: 'Poppins' }}>
        Login
      </Link>
      <Link className="btn btn-danger p-2 my-lg-0 my-2 ms-auto" to='/signup' style={{ fontFamily: 'Poppins'}}>
        Register
      </Link>
    </>
  )}
</Nav>


                
                
              
            

              
            
            
            
              
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
