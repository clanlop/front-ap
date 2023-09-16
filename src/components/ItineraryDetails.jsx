import React from 'react'

const ItineraryDetails=({excursion,price,duration,hashtags,like,comments,coordinator,photo,name,activity1,activity2,activity3,description1,description2,description3})=>{
  // Función para generar un array con la cantidad de imágenes de billetes según el precio
      const generateCashImages = (price) => {
        const cashImages = [];
         for (let i = 0; i < price; i++) {
          cashImages.cashImages
cashImages.push(
        
       <img key={i} src='../images/cash.png' alt={`Cash Image ${i}`} />
      );
    }
    return cashImages;
    }

       return(
   <>
<div>
<div className='container-itineraries'>
<div className="card-info">
  <div className="card-itinerary">
    <h2> {excursion} </h2>
  </div>
  <div className="card-detail">
  <div className="detP-D">
  <div className='price'>
    <p>Price:{price} </p>
    <div className='cash'>
    {generateCashImages(price)}
    </div>
  </div>
  <div className='duration'>
    <p className='duration-statica'>Duration: {duration} Hours</p>
    </div>
  </div>
  <div className='coordinator'>
    
     <div>
     < img  className='img-coord' src={photo}  alt='photo coordinator' width={96}height={96} />
      </div> 
      <h3>{coordinator}</h3>
  
  </div>
  <div className='like'>
    <div className='liken-imag'>
    <p className='like-number'>{like}</p>
      <div className='like-imag'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg>
      </div>
    </div>
    <div className='hashtag'>
      <p>{hashtags}</p>
  </div> 
    </div>
   </div>
 
 <div>
  <button id='btn-more' className='btn' type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">more information</button>
  </div>
  <div id="collapse"className='collapse'>
  
  <div className="card card-body">
  <>
      <div>
<h3>Activities!</h3>
</div>
       <div className='activities-container'>
       <div className='activity'>
        <div className='activity1'>
      <img  src={activity1} width={200}height={200} />
        </div>
        <div className='description'>
        <h5>{description1} </h5>
        </div>

        </div>
       <div className='activity'>
    <div className="activity1">
    <img  src={activity2} width={200}height={200} /> 
    </div>
    <div className='description'>
        <h5>{description2} </h5>
        </div>
       </div>
       <div className='activity'>
       <div className="activity1">
       <img  src={activity3} width={200}height={200} />
       </div>
       <div className='description'>
        <h5>{description3} </h5>
        </div>
</div>
        </div>



</>
        
      </div>
    </div>
  
  </div>
</div>
</div>




        </>
    )
  }
export default ItineraryDetails