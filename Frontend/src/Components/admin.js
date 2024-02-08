// admin.js
import React from 'react';
import '../Images/bootstrap.min.css';
import {  useSelector } from "react-redux";

 function Admin () {
    const {user}=useSelector(state=>state.authState);

    if(user?.role==='admin'){
  return (
    <div className='container' >
    <h2 className='text-center my-5'>Coordinator Page</h2>
   <p style={{color:'black'}} className='text-center'>Welcome to Coordinator page. You can download the most recent User registration sheets here. Do not share your credentials.</p>

<div className='row text-center'>
<div className='col'>
View All Registration Sheets on Google Drive
<br></br><br></br>
<br></br>
<a href='https://drive.google.com/drive/folders/1dLONLk3XPDfeBMtSVyrwONpUHbjhQL0o?usp=sharing' target='_blank' style={{backgroundColor:'purple',padding:'10px',borderRadius:'8px', textDecoration:'none',color:'white',fontSize:'17px'}}>View all sheets</a>
</div>

</div>

</div>
  );}
  else{
    return("403 - Not authorized");
  }

};

export default Admin;

