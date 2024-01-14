import axios from 'axios';
import { departmentsWorkshopFail, departmentsWorkshopRequest, departmentsWorkshopSuccess } from '../slices/departmentWorkshop';



export const getDepartmentWorkshop = id => async(dispatch)=>
{
    try
    {
        dispatch(departmentsWorkshopRequest())
        const {data}=await axios.get(`/api/v1/workshops/${id}`);
        dispatch(departmentsWorkshopSuccess(data))

    }
    catch(error)
    {
        //handling error when workshop not loaded

        dispatch(departmentsWorkshopFail(error.response.data.message))

    }
}