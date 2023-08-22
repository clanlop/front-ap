const Cards=({title,country,description,image})=>{
    return (
        <>
       
      
<div className="citycontainer row-cols-1 row-cols-md-3 g-4">
      
          <div className="col">
            <div  className="citycard" >
              <img src={image}className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5> {country}</h5>
               <p className="card-text">{description}</p>
                <a href="" className="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
         
          

</div>

         


</>
    )
} 
export default Cards