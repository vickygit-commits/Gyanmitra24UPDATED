import React, { useEffect } from 'react';
import './EventDetails.css';
import { Fragment } from 'react';
import { getevent } from '../actions/eventActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from './loader';
import { addWorkshopReg, eventRegistration } from '../actions/workregActions';
import  {payment1,registeredEvent}  from '../actions/workregActions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
export default function Event_details() {
    const navigate = useNavigate();
    const {event,loading}=useSelector((state)=>state.eventState)
    const{isAuthenticated,user}=useSelector((state)=>state.authState)
  const dispatch = useDispatch();
  const { id } = useParams();
  let temp;
  if(isAuthenticated)
  {
    temp=user.eventPayed;

  }
  useEffect(() => {
    dispatch(getevent(id));
  }, [dispatch, id]);
  const submitHandler=(e)=>
  {
    const valuewithTax=event.registration_fee+(event.registration_fee*0.04)

      e.preventDefault();
      const userDataJSON = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        amount:valuewithTax
    };
    const registerDataJSON = {
      eventid:event.eventid,
      eventname:event.name,
      userid:user.user_id,
      username: user.name,
    
  };

        // dispatch(registeredEvent(registerDataJSON));
        sessionStorage.setItem("UID",user.user_id);
        sessionStorage.setItem("EID",event.eventid);
        dispatch(payment1(userDataJSON));
        setTimeout(() => {
          navigate('/eventPayment');
        }, 1000);

        

  }
  const submitHandlerLogin=(e)=>
  {
    e.preventDefault();
    setTimeout(() => {
      navigate('/login');
    }, 1000);

  }  
  const RegisteredAlready=(e)=>
  {
    alert('Registered Successfully')
    e.preventDefault();
    const userDataJSON = {
      eventid:event.eventid,
      eventname:event.name,
      userid:user.user_id,
      username: user.name,

      
  };
  dispatch(eventRegistration(userDataJSON))


  } 
   return (
      <body  className=" p-0 m-0">

      <Fragment>
          {loading?<Loader/>: 
              <Fragment>
  
          <div className="container" >
          <div className="event-details-container" style={{ backgroundColor:'black'}}>
            <div className="row">
              <div className="col-lg-6 col-md-4 col-12 order-2">
              <h2 className="event-details-title">{event.name}</h2>
          <div className="event-details-content" >
           
            <p>
              <strong>Date & Time: </strong>
              Feb-17
            </p>
            <p>
              <strong>Organizing Department/Club: </strong>
              {event.organizing_department}
              <br></br>
            </p>
            <p>
              <strong>Description: </strong>
              {event.description}
              <br></br>
            </p>

            {isAuthenticated ? (
  temp === "Payed" ? (
<p>
              <strong>Payment Done-You can simply register</strong>
            </p>  ) : (
    <p>
              <strong>Fee: Rs.</strong> {event.registration_fee} /- "Including GST"
            </p>
  )
) : (
  <p>
              <strong>Fee: Rs.</strong> {event.registration_fee} /- "Including GST"
            </p>
)}
            

            <p>
              <strong>Rules of the event:</strong>  
              {event.rule ? (
                          <ul>
                            {event.rule.map((ruleItem, index) => (
                              <li key={index}>{ruleItem}</li>
                            ))}
                          </ul>
                        ) : (
                          'No rules available.'
                        )}
                        
            </p>
            <p style={{color:"red"}}> Note: You can register for any number of events, but you need to pay for only one event. Once paid for any one event, you will be able to register for other events without payment.  </p>
            <p style={{color:"red"}}> Last Date to register: 12.2.24
</p>
            <center>
          
          {isAuthenticated ? (
  temp === "Payed" ? (
    <button className="register-button" onClick={RegisteredAlready}>Register Now</button>
  ) : (
    <button className="register-button" onClick={submitHandler}>
      Register Now
    </button>
  )
) : (
  <button className="register-button" onClick={submitHandlerLogin}>
    Login to register
  </button>
)}
          </center>
          </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-1">
      <img src={event.images} className="img-fluid w-100 "/>
      </div>
            </div>
  
        </div>
              </div>  <br></br><br></br><br></br>
      </Fragment>}
      
      </Fragment>
      </body>

  );
}
