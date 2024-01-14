import { createSlice } from "@reduxjs/toolkit";

const eventpaidSlice=createSlice(
    {
        name:'eventPaid',
        initialState:
        {
            loading1:false,
            paidEvent:{}
        },
        reducers:{
            paidEventRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            paidEventSuccess(state,action)
            {
                
                return{
                    loading:false,
                    paidevent:action.payload.event
                }
            },
            paidEventFail(state,action)
            {
                return{
                    loading:false,
                    error: action.payload

                }
            }
            
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

const{actions,reducer}=eventpaidSlice;

export const{paidEventRequest,paidEventSuccess,paidEventFail}=actions;
export default reducer;
