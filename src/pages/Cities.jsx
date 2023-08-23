
import Cards from '../components/Cards'
import {Link }from'react-router-dom'

import axios from 'axios'

import React, { useState,useEffect } from 'react'

export const Cities=()=> {
  const [cities,setCities]=useState();
  useEffect(( )=>{
    axios.get('http://localhost:8000/api/cities')
    .then(response => setCities(response.data.cities))
    .catch(err => console.log(err))
  },[]);

  const handleInputChange = async (city) => {
    console.log(city.target.value)

    try {
        const response = await axios.get(`http://localhost:8000/api/cities?city=${city.target.value}`)
        setCities(response.data.cities)

    } catch (error) {
        console.log(error)
    }
}
  
  return (
    
    <div className="container-fluid">
    <form className="d-flex" role="search">
      <input onChange={handleInputChange} className="form-control me-2" placeholder='Search' type="search" aria-label="Search"></input>
      <button  className="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</button>
    </form>
   <div className="Tcities">Cities</div>
    {
      cities?.map ((city)=>{
        return(
          <Link key={city._id} to={`/cities/${city._id}` }>
          <Cards title={city.city}country={city.country}date={city.departure_date}description={city.description}image={city.image} />
          </Link>
        )
      })
      }
 </div> 
  )
}
   
  
  


