import { createSlice } from "@reduxjs/toolkit";

const workshopSlice=createSlice(
    {
        name:'Workshop',
        initialState:
        {
            loading:false,
            workshop:{}
        },
        reducers:{
            workshopRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            workshopSuccess(state,action)
            {
                return{
                    loading:false,
                    workshop:action.payload.workshop
                }
            },
            workshopFail(state,action)
            {
                return{
                    loading:false,
                    error: action.payload
                }
            }
        }
    }
);

const{actions,reducer}=workshopSlice;

export const{workshopRequest,workshopSuccess,workshopFail}=actions;
export default reducer;
