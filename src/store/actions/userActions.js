import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

export const user_photo = createAction('user_photo', (obj) => {
    console.log(obj)

    return {
        payload: {
            photo: obj.photo
        }
    }
})

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:8000/api/auth/signin', obj.data);
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

       Swal.fire({
            title: 'Welcome!',
            text: data.response.user.name,
            icon: 'success',
            confirmButtonText: 'OK'
          })
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

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})
export const signUp=createAsyncThunk('create_user',async(body)=>{
try {
    const response=await axios.post('http://localhost:8000/api/auth/signup',body)
    localStorage.setItem('token',response.data.token)
    return response.data
} catch (error) {
    console.log(error)
}
})
export const signout = createAction( "reset",() => {
    
localStorage.removeItem('token')

  return {
        payload : null
    }
} )