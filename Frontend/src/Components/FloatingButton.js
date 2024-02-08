// FloatingButton.js
import React from 'react';
import './FloatingButton.css';
import { Button, Dropdown } from 'react-bootstrap';
import '../Images/bootstrap.min.css';
const FloatingButton = ({ onClick }) => {
  

  return (
    <div className='icon-button' >
    <Dropdown >
      <Dropdown.Toggle variant="primary" className='icon-button' style={{height:'60px'}}>
        <p >Schedules/<br></br>Accommodation</p>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Header >All Schedules</Dropdown.Header>
        <div style={{paddingLeft:'20px',width:'100%',marginRight:'210px'}}>
        <a  href='./Assets/workshops.pdf' target="_blank" rel="noreferrer">Workshops Schedule</a><br></br>
        <a href='./Assets/events.pdf' target="_blank" rel="noreferrer">Events Schedule</a><br></br>
        <a href='./Assets/poster.pdf' target="_blank" rel="noreferrer">View Brochure</a>
        </div>
        <Dropdown.Header >Accommodation</Dropdown.Header>
        <div style={{paddingLeft:'20px'}}>
        <p>
     Accommodation will be provided on a requirement basis for the students coming from long distances. <br></br>Fee is Rs.100 per day. <br></br>Students can avail breakfast and dinner within mess timings.<br></br>For further details contact us.
     </p>

      </div>
      </Dropdown.Menu>
      
    </Dropdown>
   

    </div>
  );
};

export default FloatingButton;
