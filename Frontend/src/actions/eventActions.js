import axios from 'axios';
import { eventFail, eventRequest, eventSuccess } from '../slices/eventSlice';



export const getevent = id => async(dispatch)=>
{
    try
    {
        dispatch(eventRequest())
        const {data}=await axios.get(`/api/v1/event/${id}`);
        dispatch(eventSuccess(data))

    }
    catch(error)
    {
        //handling error when event not loaded

        dispatch(eventFail(error.response.data.message))

    }
}