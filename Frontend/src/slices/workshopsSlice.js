import { createSlice } from "@reduxjs/toolkit";

const workshopsSlice=createSlice(
    {
        name:'Workshops',
        initialState:
        {
            loading:false
        },
        reducers:{
            workshopsRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            workshopsSuccess(state,action)
            {
                return{
                    loading:false,
                    workshops:action.payload.workshop
                }
            },
            workshopsFail(state,action)
            {
                return{
                    loading:false,
                    error: action.payload
                }
            }
        }
    }
);

const{actions,reducer}=workshopsSlice;

export const{workshopsRequest,workshopsSuccess,workshopsFail}=actions;
export default reducer;
