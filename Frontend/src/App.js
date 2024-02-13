import {React,useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Service from './Components/Service';
import Workshop from './Components/Workshop';
import Login from './Components/user/login';
import Signup from './Components/user/register'
import About from './Components/About_College'
import Myprofile from './Components/user/Profile'
import Workshop_details from './Components/workshop_detail'
import { HelmetProvider } from 'react-helmet-async';
import './Images/bootstrap.min.css';
import './App.css'
import {ToastContainer} from 'react-toastify';
import store from './store'
import { loadUser } from './actions/userActions';
import ProtectedRoute from './Components/route/ProtectedRoute';
import UpdatePassword from './Components/user/UpdatePassword';
import ForgotPassword from './Components/user/ForgotPassword';
import ResetPassword from './Components/user/ResetPassword';
import Cart from './Components/cart'
import Payment from './Components/Payment'
import {Elements} from '@stripe/react-stripe-js'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';
import Event from './Components/Events';
import Events_details from './Components/Event_details';
import Deparment_Workshop from './Components/DepartmentWorkshop'
import Deparment_Event from './Components/DepartmentEvent'
import Success_Page from './Components/Success_Page';
import Failure_Page from './Components/Failure_Page';
import EventPayment from './Components/EventPayment';
import { getPaidWorkshop } from './actions/PaidWorkshop';
import {getPaidEvent} from './actions/PaidEvents';
import { useSelector } from 'react-redux';
import Admin from './Components/admin';

function App() {
  // const [stripeApiKey,setStripeApiKey]=useState("")
  const{isAuthenticated,user}=useSelector((state)=>state.authState);
  useEffect(()=>{
    store.dispatch(loadUser)
    store.dispatch(getPaidEvent)
    store.dispatch(getPaidWorkshop);
  
    // async function getStripeApiKey()
    // {
    //   const {data}=await axios.get(`/api/v1/stripeapi`)
    //   setStripeApiKey(data.stripeApiKey)
    // }
    // getStripeApiKey();
  },[]
  )
  return (
    <Router>
      <HelmetProvider>
      <Header/>
      <ToastContainer theme='dark'/>
      <Routes>

        <Route path="/" element={<Service />} />
        <Route path="/erp" element={<Admin/>} />

        <Route path="/workshop" element={<Workshop />} />
        <Route path="/workshop/:id" element={<Workshop_details/>}/>
        <Route path="/event" element={<Event />} /> 
        <Route path="/event/:id" element={<Events_details />} />
        <Route path="/workshops/:id" element={<Deparment_Workshop/>}/>
        <Route path="/events/:id" element={<Deparment_Event/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myprofile" element={<ProtectedRoute><Myprofile/></ProtectedRoute>} />
        <Route path="/password/change" element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />

        
        <Route path="/Payment" element={<ProtectedRoute><Payment/></ProtectedRoute>} />
        {/* <Route path="/eventPayment" element={<ProtectedRoute><EventPayment/></ProtectedRoute>} /> */}

        <Route path="/success" element={<Success_Page />} />
        <Route path="/failure" element={<Failure_Page />} />

      </Routes>
      </HelmetProvider>

    </Router>
  );
}

export default App;
