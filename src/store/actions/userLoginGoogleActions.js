import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const user_login_google = createAsyncThunk('user_login_google', async (obj) => {
    try {
        const { data } = await /*axios.post('http://localhost:8000/api/auth/google',*/ (obj.data);
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
      

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})