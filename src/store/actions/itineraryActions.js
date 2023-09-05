import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const get_itineraries=createAsyncThunk('get_itineraries',async()=>{

    try {
       const response =await axios.get('http://localhost:8000/api/itineraries')
        
       

        return{
            itineraries:response.data.itineraries
        }
    } catch (error) {
        console.log(error)
    }
});
export const get_itinerary=createAsyncThunk('get_itinerary',async(id)=>{

    try {
       const response =await axios.get('http://localhost:8000/api/itineraries/'+ id)
        
       

        return{
            itineraries:response.data.itinerary
        }
    } catch (error) {
        console.log(error)
    }
});