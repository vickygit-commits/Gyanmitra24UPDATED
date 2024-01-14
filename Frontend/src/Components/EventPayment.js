import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { payment1 } from '../actions/workregActions';

import './user/Styles/PasswordStyles.css'
function Payment(){
  const dispatch=useDispatch();
    const {user}=useSelector(state=>state.authState);
    const {event}=useSelector(state=>state.eventState);
    const {payment}=useSelector(state=>state.workregState)
    const hash=sessionStorage.getItem('hash');
    const transactionID=sessionStorage.getItem('transactionID');
    //For date calc
    const valuewithTax=event.registration_fee+(event.registration_fee*0.04)

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  // Set the API endpoint URL
  const merchantKey = "AFqk4w";
  
  const successEndpoint = `https://gyanmitra24.onrender.com/api/v1/payment/event/success?userId=${user.user_id}&userName=${encodeURIComponent(user.name)}&userEmail=${encodeURIComponent(user.email)}&eventId=${encodeURIComponent(event.eventid)}&eventName=${encodeURIComponent(event.name)}&status=${encodeURIComponent("Success")}&timestamp=${encodeURIComponent(formattedDateTime)}&hash=${hash}&transactionId=${transactionID}`;
const failureEndpoint = `https://gyanmitra24.onrender.com/api/v1/payment/event/failure?userId=${user.user_id}&userName=${encodeURIComponent(user.name)}&userEmail=${encodeURIComponent(user.email)}&eventId=${encodeURIComponent(event.eventid)}&eventName=${encodeURIComponent(event.name)}&status=${encodeURIComponent("Failure")}&timestamp=${encodeURIComponent(formattedDateTime)}&hash=${hash}&transactionId=${transactionID}`;


  // Set the order details
  // useEffect(() => {
  //   dispatch(payment1);
  // }, [dispatch]);
  const productInfo = "Gyanmitra_Entry";
    return (
        <div className=" ChangePassContainer">
            <h1 className="mt-2 mb-5">
                        Proceed to Gateway??
                    </h1>
                    <label >Name:</label>
        <input
          type="text"
          id="user_name_pay"

          value={user.name}
          disabled
        />

<label >Email:</label>
        <input
          type="text"
          id="user_email_pay"

          value={user.email}
          disabled
        />
        <label >Phone:</label>
        <input
          type="text"
          id="user_phone_pay"
          value={user.phone}
          disabled
        />
        <label>Amount:</label>
        <input
          type="text"
          id="user_amount_pay"
          value={event.registration_fee}
          disabled
        />
        <form action='https://secure.payu.in/_payment' method='post'>
        <input type="hidden" name="key" value={merchantKey} />
        <input type="hidden" name="txnid" value={transactionID} />
        <input type="hidden" name="productinfo" value={productInfo} />
        <input type="hidden" name="amount" value={valuewithTax} />
        <input type="hidden" name="email" value={user.email} />
        <input type="hidden" name="firstname" value={user.name} />
        <input type="hidden" name="surl" value={successEndpoint}/>
        <input type="hidden" name="furl" value={failureEndpoint} />
        <input type="hidden" name="phone" value={user.phone} />
        {/* <input type="hidden" name="udf1" value={'details1'} />
        <input type="hidden" name="udf2" value={'details2'} />
        <input type="hidden" name="udf3" value={'details3'} />
        <input type="hidden" name="udf4" value={'details4'} />
        <input type="hidden" name="udf5" value={'details5'} /> */}

        <input type="hidden" name="hash" value={hash} />
        <input type="submit" value="submit"/> 
        </form>
        </div>
      );
}
export default Payment;
