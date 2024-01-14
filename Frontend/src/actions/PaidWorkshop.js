import axios from 'axios';
import { paidWorkshopRequest, paidWorkshopSuccess,paidWorkshopFail } from '../slices/workpaid';



export const getPaidWorkshop =  async(dispatch)=>
{
    try
    {
        dispatch(paidWorkshopRequest())
        const {data}=await axios.get(`/api/v1/getPaidWorkshop`);
        dispatch(paidWorkshopSuccess(data))

    }
    catch(error)
    {
        //handling error when event not loaded
        dispatch(paidWorkshopFail(error.response.data.message))

        // dispatch(eventFail(error.response.data.message))

    }
}