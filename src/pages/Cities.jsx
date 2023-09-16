
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'

import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filter_cities, get_cities} from '../store/actions/cityActions'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export const Cities = () => {

  const cities =useSelector((store)=>store.cityReducer.cities)

  const dispatch=useDispatch();
  let inputSearch = useRef(null);

  useEffect(() => {
    dispatch(get_cities())
  }, []);

  const handleSearch = async () => {

    dispatch(filter_cities({
      name:inputSearch.current.value
    }))

}

  return (
<>
    <div className="container-fluid">
      <div className="search" >
        <input ref={inputSearch} className="form-control me-2" placeholder='Search' type="search" aria-label="Search"></input>
        <button onClick={handleSearch} className="btn btn-outline-success" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        </button>
      </div>
      
      <div  className='container'>
      <div className="Tcities">Cities</div>
      
        <div className='cityCard'>
      {
        cities?.length > 0

          ? cities?.map((city) => {
            return (
              <Link key={city._id} to={`/cities/${city._id}`}>
                <Cards title={city.city} country={city.country} date={city.departure_date} description={city.description} image={city.image} />
              </Link>
            )
          })
         
          : <h2>The city you are looking for is not in our itinerary </h2>
         
      }
      </div>
      </div>
      </div>
      </>
  )
}





