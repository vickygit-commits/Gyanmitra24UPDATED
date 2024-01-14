import { createSlice } from "@reduxjs/toolkit";

const departmentsEventSlice=createSlice(
    {
        name:'DepartmentEvent',
        initialState:
        {
            loading:false
        },
        reducers:{
            departmentsEventRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            departmentsEventSuccess(state,action)
            {
                return{
                    loading:false,
                    events:action.payload.event
                }
            },
            departmentsEventFail(state,action)
            {
                return{
                    loading:false,
                    error: action.payload
                }
            }
        }
    }
);

const{actions,reducer}=departmentsEventSlice;

export const{departmentsEventRequest,departmentsEventSuccess,departmentsEventFail}=actions;
export default reducer;
