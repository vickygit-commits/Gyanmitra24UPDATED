import axios from 'axios';
import { workshopsFail, workshopsRequest, workshopsSuccess } from '../slices/workshopsSlice';



export const getWorkshops = async(dispatch)=>
{
    try
    {
        dispatch(workshopsRequest())
        const {data}=await axios.get('/api/v1/workshop');
        dispatch(workshopsSuccess(data))

    }
    catch(error)
    {
        //handling error when workshop not loaded

        dispatch(workshopsFail(error.response.data.message))

    }
}