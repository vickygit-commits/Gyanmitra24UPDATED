import axios from 'axios';
import { paidEventRequest, paidEventSuccess,paidEventFail } from '../slices/eventPaid';



export const getPaidEvent = async(dispatch)=>
{
    try
    {
        dispatch(paidEventRequest())
        const {data}=await axios.get(`/api/v1/getPaidEvent`);
        dispatch(paidEventSuccess(data))

    }
    catch(error)
    {
        //handling error when event not loaded
        dispatch(paidEventFail(error.response.data.message))

        // dispatch(eventFail(error.response.data.message))

    }
}