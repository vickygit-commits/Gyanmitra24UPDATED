import React, { Fragment, useEffect, useState } from 'react';
import styles from '../event.module.css';
import '../Images/bootstrap.min.css';
import { getDepartmentWorkshop} from '../actions/departmentSpecificWorkshop';
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

  const {workshops,loading,error}=useSelector((state)=>state.departmentworkshopstate)
  useEffect(()=>
  {
    if(error)
    {

      
    return toast.error(error,{
      position:toast.POSITION.BOTTOM_CENTER
    })
  }
    dispatch(getDepartmentWorkshop(id))
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
        <h1 className={`${styles.title} py-4`} >Workshops</h1>

          <hr style={{ color: 'white' }} />

          <Navbar id="Navbar1" expand="lg" className="bg-body-tertiary"  >
      <Container >
        <Navbar.Brand href="/workshop" style={{ color:'white'}}
        >Workshop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ position:'relative'}}>
          <Nav className="ms-auto ml-1 p-1" id="navbarSupportedContent">
          <Nav.Link href="/workshop">All</Nav.Link>

          <Nav.Link href="/workshops/Civil-Arch" >Cogrid Hocus<br></br>(Civil/Arch)</Nav.Link>
            <Nav.Link href="/workshops/EEE" >Zwitterion<br></br>(EEE)</Nav.Link>
            <Nav.Link href="/workshops/ECE-BME" >Erudition<br></br>(ECE/BME)</Nav.Link>

            <Nav.Link href="/workshops/CSE-IT-AIDS" >Vipravuha<br></br>(CSE/IT/AIDS)</Nav.Link>
            
             <Nav.Link href="/workshops/Mech" >Cryptix<br></br>(Mech)</Nav.Link>
             <Nav.Link href="/workshops/BioTech" >Biologix<br></br>(BioTech)</Nav.Link>
             <Nav.Link href="/workshops/Mathematics" >Exponents<br></br>(Maths/Science)</Nav.Link>
             <Nav.Link href="/workshops/MCA" >Cossack<br></br>(MCA)</Nav.Link>

            </Nav>



                
                
              
            

              
            
            
            
              
        </Navbar.Collapse>
      </Container>
    </Navbar>

          <div className="container">
            <div className="tab-content">
              <div className="tab-pane active">
              <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 gy-3 py-5">

                    {workshops && workshops.map(workshop => (
                                            <div className="col-md-4 mt-5">
                    

                    <div  className="card h-100" style={{ backgroundColor:'black'}}>
                      
                                    <img className="card-img-top h-50" src={workshop.images} alt="Card image cap"/>

                        <div className="card-body">
                <h5 className="card-title" style={{ color:'pink'}} >{workshop.name}</h5>
                <p className="card-text" style={{ color:'white'}} >Rs. {workshop.registration_fee}</p>

                <div className="mb-5" >
                <h6 style={{ color:'white'}}>{workshop.organizing_department}</h6>
                <Link to={`/workshop/${workshop.workshopid}`} className={`${styles.btn1} btn btn-outline-light mt-5`}>
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
