import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Images/bootstrap.min.css';

function Failure_Page() {
  const navigate = useNavigate();
  const hash=sessionStorage.getItem('hash');
  const transactionID=sessionStorage.getItem('transactionID');
  const uid=sessionStorage.getItem('UID')
  const eid=sessionStorage.getItem('EID');

  const redirectToHomePage = () => {
    navigate('/');
  };

 //For date calc
 const currentDate = new Date();
 const year = currentDate.getFullYear();
 const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
 const day = String(currentDate.getDate()).padStart(2, '0');
 const hours = String(currentDate.getHours()).padStart(2, '0');
 const minutes = String(currentDate.getMinutes()).padStart(2, '0');
 const seconds = String(currentDate.getSeconds()).padStart(2, '0');

const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return (
    <div className='container-fluid'>
      <div className='row'>
        <center><br></br>
          <h1>Gyanmitra '24</h1>
        <div className='col-lg-12 col-md-4 col-12'>
      <h1>Transaction Failed - Not Registered</h1>
      <p className=''>UID: {uid}</p>
      <p className=''>Workshop/Event ID: {eid}</p>
      <p className=''>Transaction ID: {transactionID}</p>
      <p className=''>Time Stamp: {formattedDateTime}</p>
      <p style={{backgroundColor:'red', color:'white'}}>Transaction Failed</p>
      <p>You can go back to the home page.</p>
      <button className="btn-primary" style={{color:"white",backgroundColor:"blue",borderRadius:"10px",padding:"10px"}} onClick={redirectToHomePage}>Go to Home</button>
    </div>
    </center>
    </div>
    </div>
  );
}

export default Failure_Page;
