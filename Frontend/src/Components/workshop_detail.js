import React, { useEffect } from 'react';
import './EventDetails.css';
import { Fragment } from 'react';
import { getWorkshop } from '../actions/workshopAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loader from './loader';
import  {payment1,registeredWorkshop}  from '../actions/workregActions';
import Swal from 'sweetalert2'
import { getPaidWorkshop } from '../actions/PaidWorkshop';
export default function WorkshopDetail() {
  const{isAuthenticated,user}=useSelector((state)=>state.authState)
    const {workshop,loading}=useSelector((state)=>state.workshopState)
    let temp;
    if(isAuthenticated)
    {
      temp=user.workshopPayed;

    }
    if(workshop.organizing_department==='MCA')
    {
      alert('The MCA workshops are allowed only for Arts and Science Students alone.')
    }
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getWorkshop(id));
    

  }, [dispatch, id]);

  const RegisteredAlready=(e)=>
  {
    e.preventDefault();
    alert("Already registered in a workshop");
  }
  const submitHandler=(e)=>
  {
    const valuewithTax=workshop.registration_fee+(workshop.registration_fee*0.04)

      e.preventDefault();
      const userDataJSON = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        amount:valuewithTax
    };
    const registerDataJSON = {
      workshopid:workshop.workshopid,
      workshopname:workshop.name,
      userid:user.user_id,
      username: user.name,
    
  };
  sessionStorage.setItem("UID",user.user_id);
  sessionStorage.setItem("EID",workshop.workshopid);

        dispatch(payment1(userDataJSON));
        

setTimeout(() => {
      navigate('/payment');
    }, 1000);

  }

  const submitHandlerLogin=(e)=>
  {
    e.preventDefault();
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  }
    return (
      <body  className=" p-0 m-0">

    <Fragment>
        {loading ?<Loader/>: 
            <Fragment>

        <h1 className="title" >Workshops</h1>
        <div className="container" >
        <div className="event-details-container" style={{ backgroundColor:'black'}}>
          <div className="row">
            <div className="col-lg-6 col-md-4 col-12 order-2">
            <h2 className="event-details-title">{workshop.name}</h2>
        <div className="event-details-content" >
         
          <p>
            <strong>Date & Time: </strong>
            Feb-16
          </p>
          <p>
            <strong>Organizing Department/Club: </strong>
            {workshop.organizing_department}
            <br></br>
          </p>
          <p>
            <strong>Description: </strong>
            {workshop.description}
            <br></br>
          </p>
          <p>
            <strong>Fee: Rs.</strong> {workshop.registration_fee}/-"Including GST"
          </p>
          <p>
            <strong>Contact: </strong> {workshop.contact_number}
          </p>
          <p style={{color:"red"}}> Note: You can register in only one workshop.  
</p>
<p style={{color:"red"}}> Last Date to register: 12.2.24
</p>
          <center>
          
          {isAuthenticated ? (
  temp === "Payed" ? (
    <button className="btn btn-secondary" onClick={RegisteredAlready}>Workshop already registered</button>
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
      <img src={workshop.images} className="img-fluid w-100 "/>
      </div>
          </div>

      </div>
            </div>  <br></br><br></br><br></br>
    </Fragment>}
    
    </Fragment>
    </body>


  );
}
