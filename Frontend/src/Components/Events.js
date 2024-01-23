import React, { Fragment, useEffect, useState } from 'react';
import styles from '../event.module.css';
import '../Images/bootstrap.min.css';
import { getEvents } from '../actions/eventsAction';
import { useDispatch,useSelector } from 'react-redux';
import Loader from './loader';
import MetaData from './MetaData';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown,DropdownButton,Dropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
function Events() {
  const address =
  '\nMepco Schlenk Engineering College Campus, Mepco Schlenk Engineering College Post, Sivakasi – 626005,\nVirudhunagar District, Tamilnadu, India.';
const phoneNumber = '+91-4562-235000 (30 Lines)';
const mapPosition = [9.525360975955065, 77.85359498936283]; // Default position for the map (latitude, longitude)
const email = 'msec@mepcoeng.ac.in';
  const dispatch=useDispatch();
  const {events,loading,error}=useSelector((state)=>state.eventsState)
  useEffect(()=>
  {
    if(error)
    {

    
    return toast.error(error,{
      position:toast.POSITION.BOTTOM_CENTER
    })
  }
    dispatch(getEvents)
  },[error])
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tabId) => {
    console.log('Clicked tab:', tabId);
    setActiveTab(tabId);  };


  

  // const filteredEvents = activeTab === 'all' ? events : events.filter(event => event.department.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <Fragment>
      <MetaData title={'Events'}/>
      {loading ? <Loader/>:
    
    <Fragment>
    <body className={`${styles.workshopbody} `}>
      <section id="Home">
        <div className="container">
          <h1 className={`${styles.title} py-4`} >Events</h1>
          <h2 className="text-center" style={{color:'white',fontWeight:"bold"}}>On 17 / 02 / 2024</h2>
          <hr style={{ color: 'white' }} />

          <Navbar id="Navbar1" expand="lg" className="bg-body-tertiary"  >
      <Container >
        <Navbar.Brand href="/event" style={{ color:'white'}}
        >Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ position:'relative'}}>
          <Nav className="ms-auto ml-1 p-1" id="navbarSupportedContent">
          <Nav.Link href="/event">All</Nav.Link>

          <Nav.Link href="/events/Civil-Arch" >Cogrid Hocus<br>(Civil/Arch)</br></Nav.Link>
            <Nav.Link href="/events/EEE" >Zwitterion<br>(EEE)</br></Nav.Link>
            <Nav.Link href="/events/ECE-BioMedical" >Erudition<br>(ECE/BME)</br></Nav.Link>

            <Nav.Link href="/events/CSE-IT-AIDS" >Vipravuha<br>(CSE/IT/AIDS)</br></Nav.Link>
            
             <Nav.Link href="/events/MECH" >Cryptix<br>(Mech)</br></Nav.Link>
             <Nav.Link href="/events/Bio-Technology" >Biologix<br>(BioTech)</br></Nav.Link>
             <Nav.Link href="/events/Maths" >Exponents<br>(Maths/Science)</br></Nav.Link>
             <Nav.Link href="/events/MCA" >Cossack<br>(MCA)</br></Nav.Link>

            </Nav>

              
        </Navbar.Collapse>
      </Container>
    </Navbar>

          <div className="container">
            <div className="tab-content">
              <div className="tab-pane active">
              <div className="container">
                  
                    <div className="row row-cols-1 row-cols-md-3 gy-3 py-5">

                    { events && events.map(event => (
                                            <div className="col-md-4 mt-5">

                    <div  className="card h-100" style={{ backgroundColor:'black'}}>
                      
                                    <img className="card-img-top h-50" src={event.images} alt="Card image cap"/>

                        <div className="card-body">
                <h5 className="card-title" style={{ color:'pink'}} >{event.name}</h5>
                <p className="card-text" style={{ color:'white'}} >Event Type: {event.eventtype}</p>
                  
                {/* <p className="card-text" style={{ color:'white'}} >{event.description}</p> */}
                <div className="mb-5" >
                <h6 style={{ color:'white'}}>{event.organizing_department}</h6>
                <Link to={`/event/${event.eventid}`} className={`${styles.btn1} btn btn-outline-light mt-5`}>
                              Explore</Link>
              </div>
              </div>
			  
                      </div>
                      </div>
                      ))}
                                            

                   </div>
                  
                  
                </div>
              </div>
            </div>
            <h1 style={{
                color:'#dd1133',
                fontFamily:'Poppins'
              }}>Contact Us</h1>
              <hr style={{
              border:'2px solid white'
              }}/>

        
    <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <p className="lead" style={{color:'white'}}>Feel free to reach out to us!</p>
          <div style={{color:'white'}} >
            
              <p>Address: <br/>{address}</p>
              <p>Phone: {phoneNumber}</p>
              <p>Email: {email}</p>
            
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-4">
        <iframe className='map' style={{borderRadius: '15px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.795634369296!2d77.84947511647749!3d9.526477260291959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06d3287794055d%3A0x9c7b889bf154fb86!2sMepco%20Schlenk%20Engineering%20College!5e0!3m2!1sen!2sin!4v1703528868735!5m2!1sen!2sin" width="90%" height="350px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <br/>
      <hr style={{color: 'white'}}/>

      <div className="row">
        <center>
      <div className="col-md-6">
        <br/>
        <p className='foot' style={{fontSize: '13px',color:"white"}}>©️2023-2024, Mepco Schlenk Engineering College. All rights reserved.<br/>
        Designed and Developed by <a href="https://github.com/coffee-loves-code-2003" target='blank'>Vignesh S (3rd Year IT)</a> | <a href="https://vijeshpethuram.web.app" target='blank'> Vijesh Pethuram (3rd Year IT)</a> </p>
        
        </div>
        </center>
      </div>
          </div>
        </div>
      </section>
      
    </body>
    </Fragment>
}
    </Fragment>
  );
}

export default Events;
