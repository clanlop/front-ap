import React from 'react'
import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'


const Details = ({title,country,image}) => {
 
    const  {id} = useParams();
    const [cities,setCities]=useState();
    useEffect(() => {
        // Peticion axios para traerme la info de UN SOLO EVENTO
        // Utilizar el ID del use params para hacer esa peticion

        axios.get('http://localhost:8000/api/cities/:id')
        .then(response => setCities(response.data.cities))
        .catch(err => console.log(err))

    }, [])

return (
   
    <div>
    <h2 className='text-3xl text-center'>Details: {id}</h2>
    <div className="citycontainer row-cols-1 row-cols-md-3 g-4">
      
      <div className="col">
        <div  className="citycard" >
          <img src={image}className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5> {country}</h5>
           
          </div>
        </div>
      </div>
     </div>
<div>
  <img src='../images/Construction.png'></img>
</div>
</div>


    )
    

  }


export default Details