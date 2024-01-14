import { createSlice } from "@reduxjs/toolkit";

const eventSlice=createSlice(
    {
        name:'Event',
        initialState:
        {
            loading:false,
            event:{}
        },
        reducers:{
            eventRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            eventSuccess(state,action)
            {
                return{
                    loading:false,
                    event:action.payload.event
                }
            },
            eventFail(state,action)
            {
                return{
                    loading:false,
                    error: action.payload
                }
            }
        }
    }
);

const{actions,reducer}=eventSlice;

export const{eventRequest,eventSuccess,eventFail}=actions;
export default reducer;
