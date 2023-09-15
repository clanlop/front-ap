
import { useDispatch } from 'react-redux'

import ItineraryDetails from '../components/ItineraryDetails'
import React from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {  get_city } from '../store/actions/cityActions'
import { get_itinerary } from '../store/actions/itineraryActions';
const Details = () => {
  


    const  {id} = useParams();
    const city =useSelector(store=>store.cityReducer.city);
console.log(city)

    const itinerary=useSelector((store)=>store.itineraryReducer.itinerary);
    console.log(itinerary)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(get_city(id));

        dispatch(get_itinerary(id));
      }, []);

    
    
     

return (
 <div className='container-detail'>
   
   <p className='titleD'>"Discover the activities and excursions designed for you"</p>
   <div className='container-itineraries'>
    <div id='cardDetail' className="card text-bg-dark" >
    <img src={city.image}className="card-img-top" alt="..."></img>
      <div className="card-img-overlay">
      <h1 className="card-title">{city.city}</h1>
      <h5> {city.country}</h5>

    </div>
     </div>
</div>
{ city?.itinerary?.length > 0
  ? city.itinerary?.map((itinerary) => {
     return(
     
     <ItineraryDetails key={itinerary._id} excursion={itinerary.excursion} price={itinerary.price} duration={itinerary.duration}hashtags ={itinerary.hashtags} like={itinerary.like}comments={itinerary.comments}photo={itinerary.coordinator.photo}coordinator={itinerary.coordinator.name}activity1={itinerary.coordinator.activities.activity1}activity2={itinerary.coordinator.activities.activity2}activity3={itinerary.coordinator.activities.activity3}description1={itinerary.coordinator.activities.description1}description2={itinerary.coordinator.activities.description2}description3={itinerary.coordinator.activities.description3} />
  
     )
     } 
      )
      : <h2> Sorry, there are no itineraries for this city yet.
     We are working on it!</h2>
 }

</div>
)
    }


export default Details