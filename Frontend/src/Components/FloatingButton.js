// FloatingButton.js
import React from 'react';
import './FloatingButton.css';
import { Button, Dropdown } from 'react-bootstrap';
import '../Images/bootstrap.min.css';
const FloatingButton = ({ onClick }) => {
  // Mock data for events and times
  const events = [
    { id: 1, name: 'Workshops', time: '16/02/2024 | 9:00 AM - 5:00 PM' },
    { id: 2, name: 'Events ', time: '17/02/2024 | 9:00 AM - 5:00 PM' },
    
  ];

  return (
    <div className='icon-button'>
    <Dropdown>
      <Dropdown.Toggle variant="primary" className='icon-button'>
        <p>Schedule</p>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Header>Schedule</Dropdown.Header>
        {events.map((event) => (
          <Dropdown.Item key={event.id}>
            <strong>{event.name}</strong> - {event.time}
          </Dropdown.Item>
        ))}
        <a href='./Assets/poster.pdf' target="_blank" rel="noreferrer">View Brochure</a>
      </Dropdown.Menu>
    </Dropdown></div>
  );
};

export default FloatingButton;
