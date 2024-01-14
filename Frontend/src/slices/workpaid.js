import { createSlice } from "@reduxjs/toolkit";

const workpaidSlice=createSlice(
    {
        name:'WorkshopPaid',
        initialState:
        {
            loading1:false,
            paidworkshop:{}
        },
        reducers:{
            paidWorkshopRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            paidWorkshopSuccess(state,action)
            {
                
                return{
                    loading:false,
                    paidworkshop:action.payload.workshop
                }
            },
            paidWorkshopFail(state,action)
            {
                return{
                    ...state,
                    loading:false,
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

const{actions,reducer}=workpaidSlice;

export const{paidWorkshopRequest,paidWorkshopSuccess,paidWorkshopFail}=actions;
export default reducer;
