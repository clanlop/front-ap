import { createReducer } from "@reduxjs/toolkit";
import { user_photo, user_login, user_token,signUp,signout } from '../actions/userActions';

const initialState = {
    
    user: null,
    token: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(user_login.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_token, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
            }
        })
        .addCase( signUp.fulfilled, ( stateActual, action ) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        } )

        .addCase( signout, (stateActual, action) => {
            return  {
                ...stateActual,
                user : null,
                token : null
            }
        } )
)

export default userReducer