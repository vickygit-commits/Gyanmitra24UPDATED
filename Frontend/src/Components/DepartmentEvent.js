import React, { Fragment, useEffect, useState } from 'react';
import styles from '../event.module.css';
import '../Images/bootstrap.min.css';
import { getDepartmentEvent} from '../actions/departmentSpecificEvents';
import { useDispatch,useSelector } from 'react-redux';
import Loader from './loader';
import MetaData from './MetaData';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link,useParams} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown,DropdownButton,Dropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Department_Workshop() {
  const dispatch=useDispatch();
  const { id } = useParams();

  const {events,loading,error}=useSelector((state)=>state.departmenteventstate)
  useEffect(()=>
  {
    if(error)
    {

      
    return toast.error(error,{
      position:toast.POSITION.BOTTOM_CENTER
    })
  }
    dispatch(getDepartmentEvent(id))
  },[error,dispatch])
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tabId) => {
    console.log('Clicked tab:', tabId);
    setActiveTab(tabId);  };

  

  // const filteredEvents = activeTab === 'all' ? events : events.filter(event => event.department.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <Fragment>
      <MetaData title={'Workshop'}/>
      {loading ? <Loader/>:
    
    <Fragment>
    <body className={`${styles.workshopbody} `}>
      <section id="Home">
        <div className="container">
        <h1 className={`${styles.title} py-4`} >Events</h1>

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

          <Nav.Link href="/events/Civil-Arch" >Cogrid Hocus<br></br>(Civil/Arch)</Nav.Link>
            <Nav.Link href="/events/EEE" >Zwitterion<br></br>(EEE)</Nav.Link>
            <Nav.Link href="/events/ECE-BioMedical" >Erudition<br></br>(ECE/BME)</Nav.Link>

            <Nav.Link href="/events/CSE-IT-AIDS" >Vipravuha<br></br>(CSE/IT/AIDS)</Nav.Link>
            
             <Nav.Link href="/events/MECH" >Cryptix<br></br>(Mech)</Nav.Link>
             <Nav.Link href="/events/Bio-Technology" >Biologix<br></br>(BioTech)</Nav.Link>
             <Nav.Link href="/events/Maths" >Exponents<br></br>(Common)</Nav.Link>
             <Nav.Link href="/events/MCA" >Cossack<br></br>(MCA)</Nav.Link>

            </Nav>



                
                
              
            

              
            
            
            
              
        </Navbar.Collapse>
      </Container>
    </Navbar>

          <div className="container">
            <div className="tab-content">
              <div className="tab-pane active">
              <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 gy-3 py-5">

                    {events && events.map(event => (
                                            <div className="col-md-4 mt-5">
                    

                    <div  className="card h-100" style={{ backgroundColor:'black'}}>
                      
                                    <img className="card-img-top h-50" src={event.images} alt="Card image cap"/>

                        <div className="card-body">
                <h5 className="card-title" style={{ color:'pink'}} >{event.name}</h5>
                <p className="card-text" style={{ color:'white'}} >Event Type: {event.eventtype}</p>
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
          </div>
        </div>
      </section>
    </body>
    </Fragment>
}
    </Fragment>
  );
}

export default Department_Workshop;
