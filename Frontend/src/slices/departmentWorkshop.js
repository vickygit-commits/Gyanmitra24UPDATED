import { createSlice } from "@reduxjs/toolkit";

const departmentsWorkshopSlice=createSlice(
    {
        name:'DepartmentWorkshop',
        initialState:
        {
            loading:false
        },
        reducers:{
            departmentsWorkshopRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            departmentsWorkshopSuccess(state,action)
            {
                return{
                    loading:false,
                    workshops:action.payload.workshop
                }
            },
            departmentsWorkshopFail(state,action)
            {
                return{
                    loading:false,
                    error: action.payload
                }
            }
        }
    }
);

const{actions,reducer}=departmentsWorkshopSlice;

export const{departmentsWorkshopRequest,departmentsWorkshopSuccess,departmentsWorkshopFail}=actions;
export default reducer;
