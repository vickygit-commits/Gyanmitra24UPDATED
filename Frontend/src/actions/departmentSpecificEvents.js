import axios from 'axios';
import { departmentsEventFail, departmentsEventRequest, departmentsEventSuccess } from '../slices/departmentEvent';



export const getDepartmentEvent = id => async(dispatch)=>
{
    try
    {
        dispatch(departmentsEventRequest())
        const {data}=await axios.get(`/api/v1/events/${id}`);
        dispatch(departmentsEventSuccess(data))

    }
    catch(error)
    {
        //handling error when workshop not loaded

        dispatch(departmentsEventFail(error.response.data.message))

    }
}