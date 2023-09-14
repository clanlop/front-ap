import { createReducer } from "@reduxjs/toolkit";
import {user_login_google}from '../actions/userLoginGoogleActions'
const initialState = {
    
    user: null,
    token: null
}

const userLoginGoogleReducer = createReducer(initialState,
    (builder) => builder
    .addCase(user_login_google.fulfilled, (state, action) => {

        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
    })
    
    
    )
    export default userLoginGoogleReducer