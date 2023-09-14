import React, { useEffect } from 'react';
import {useRef}from 'react';
import axios from "axios";
import {user_login_google }from '../store/actions/userLoginGoogleActions'
import { useDispatch } from "react-redux"
export const GoogleSignin=()=> {
    const googleButton = useRef();
   const dispatch = useDispatch();
    const handleCredentialResponse=async(response)=>{
   const data = {
        token_id: response.credential
    }

    const userResponse = await axios.post('http://localhost:8000/api/auth/google', data);
    
   console.log(userResponse)
    try {
      dispatch(user_login_google({
          data:userResponse
      }))
  } catch (error) {
      console.log(error)
  }
  
    
}


    
    useEffect(()=>{
        if(window.google) {
            window.google.accounts.id.initialize({
              client_id: "471836233476-c33ntpgng2682nb1m0bko5ffag4m4653.apps.googleusercontent.com",
              callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current, 
              { type: 'standard', shape: 'pill', theme: "filled_black", size: "medium", text: 'signin_with' }  // customization attributes
            );
           
          }
    },[])
  return (
    <div ref={googleButton}></div>
  )
}

