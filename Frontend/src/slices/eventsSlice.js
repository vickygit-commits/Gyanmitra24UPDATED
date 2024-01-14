import { createSlice } from "@reduxjs/toolkit";

const eventsSlice=createSlice(
    {
        name:'Events',
        initialState:
        {
            loading:false
        },
        reducers:{
            eventsRequest(state,action)
            {
                return{
                    loading:true,
                }
            },
            eventsSuccess(state,action)
            {
                return{
                    loading:false,
                    events:action.payload.event
                }
            },
            eventsFail(state,action)
            {
                return{
                    loading:false,
                    error: action.payload
                }
            }
        }
    }
);

const{actions,reducer}=eventsSlice;

export const{eventsRequest,eventsSuccess,eventsFail}=actions;
export default reducer;
