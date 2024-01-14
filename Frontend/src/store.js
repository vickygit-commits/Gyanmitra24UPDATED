import {combineReducers, configureStore} from '@reduxjs/toolkit'
import workshopsReducer from "./slices/workshopsSlice"
import workshopReducer from "./slices/workshopSlices"
import authReducer from './slices/authSlice'
import workregReducer from './slices/workshopRegister'
import eventsReducer from './slices/eventsSlice'
import eventReducer from './slices/eventSlice'
import departmentWorkshopReducer from './slices/departmentWorkshop'
import departmentEventReducer from './slices/departmentEvent'
import workshopPaidReducer from './slices/workpaid'
import eventPaidReducer from './slices/eventPaid'
const reducer = combineReducers(
    {
        workshopsState:workshopsReducer,
        workshopState:workshopReducer,
        authState:authReducer,
        workregState:workregReducer,
        eventsState:eventsReducer,
        eventState:eventReducer,
        departmentworkshopstate:departmentWorkshopReducer,
        departmenteventstate:departmentEventReducer,
        PaidWorkshopState:workshopPaidReducer,
        PaidEventState:eventPaidReducer

    }
)
const store=configureStore(
    {
        reducer,
    }
)
export default store;