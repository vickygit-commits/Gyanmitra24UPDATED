import { createSlice } from "@reduxjs/toolkit";

const workshopregSlice=createSlice(
    {
        name:'Registration',
        initialState:
        {
            loading:false,
            payment:{}
        },
        reducers:{
            addWorkshopRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            addWorkshopSuccess(state,action)
            {
                
                return{
                    loading:false,
                    payment:action.payload.payment
                }
            },
            
            
            // addworkshopFail(state,action)
            // {
            //     return{
            //         ...state,
            //         loading:false,
            //         error: action.payload
            //      }
            //  }
        }
    }
);

const{actions,reducer}=workshopregSlice;

export const{addWorkshopRequest,addWorkshopSuccess,orderCompleted}=actions;
export default reducer;
