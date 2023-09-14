import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './reducers/cityReducers';
import itineraryReducer from './reducers/itineraryReducers'
import userReducer from "./reducers/userReducers";
import userLoginGoogleReducer from './reducers/userLoginGoogleReducer';
export const store=configureStore({
    reducer:{

        cityReducer:cityReducer,
       itineraryReducer:itineraryReducer,
       userReducer:userReducer,
       userLoginGoogleReducer:userLoginGoogleReducer,
    }
})