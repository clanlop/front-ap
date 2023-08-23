import React from 'react'
import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'


const Details = () => {
 
    const  {id} = useParams();
    const [cities,setCities]=useState();
    useEffect(() => {
        
        axios.get('http://localhost:8000/api/cities/'+id)
        .then(response =>{setCities(response.data.city)
        console.log(response)
        } )
        .catch(err => console.log(err))

    }, [])

return (
   
    <div>
    <p className='TD'>Details:{id}</p>
    <div className="citycontainer row-cols-1 row-cols-md-3 g- ">
      
      <div className="col">
        <div  className="citycard" >
          <img src={cities?.image}className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{cities?.city}</h5>
            <h5> {cities?.country}</h5>
           
          </div>
        </div>
      </div>
     </div>
<div className='container row-cols-1 '>
  <img src='../images/Construction.png'></img>
</div>
</div>


    )
    

  }


export default Details