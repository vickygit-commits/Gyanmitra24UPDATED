import axios from 'axios';
import { workshopFail, workshopRequest, workshopSuccess } from '../slices/workshopSlices';



export const getWorkshop = id => async(dispatch)=>
{
    try
    {
        dispatch(workshopRequest())
        const {data}=await axios.get(`/api/v1/workshop/${id}`);
        dispatch(workshopSuccess(data))

    }
    catch(error)
    {
        //handling error when workshop not loaded

        dispatch(workshopFail(error.response.data.message))

    }
}