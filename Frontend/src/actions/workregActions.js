import { addWorkshopRequest, addWorkshopSuccess } from "../slices/workshopRegister";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Payment from '../Components/Payment'


export const registeredWorkshop= (Data)=>async(dispatch)=>
{
  try
  {
    const{data}=await axios.post(`/api/v1/workshop/register/`,Data);
  }
  catch (error) {
    console.error("Error in Registration:", error);
  }
}
export const registeredEvent= (Data)=>async(dispatch)=>
{
  try
  {
    const{data}=await axios.post(`/api/v1/event/register/`,Data);
  }
  catch (error) {
    console.error("Error in Registration:", error);
  }
}
export const payment1 = (userData) => async (dispatch) => {
  try {
    //dispatch(addWorkshopRequest());
    const {data} = await axios.post(`/api/v1/payment/process/`, userData);
    sessionStorage.setItem("hash",data.hash)
    sessionStorage.setItem("transactionID",data.transactionID)
    // dispatch(addWorkshopSuccess(data));
    // Retrieve hash and transactionID from the response

    // Log the values to the console (optional)
    
    
    // Assuming the response has a structure like { hash, transactionID }
    

  } catch (error) {
    console.error("Error in payment action:", error);
  }
};
export const eventRegistration = (userData) => async (dispatch) => {
  try {
    //dispatch(addWorkshopRequest());
    const {data} = await axios.post(`/api/v1/event/register/`, userData);
    
    // dispatch(addWorkshopSuccess(data));
    // Retrieve hash and transactionID from the response

    // Log the values to the console (optional)
    
    
    // Assuming the response has a structure like { hash, transactionID }
    

  } catch (error) {
    console.error("Error in payment action:", error);
  }
};
