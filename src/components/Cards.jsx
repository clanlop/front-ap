const Cards=({title,country,description,image})=>{
    return (
        <>
       
      
<div id="card"  className="card mb-3 " >
      
          <div className="row" >
            <div  className="col-md-6 " >
              <img src={image}className="img-fluid" alt="..."></img>
             </div>
             <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <h5> {country}</h5>
                <br />
               <p className="card-text">{description}</p>
              </div>  
              </div>
            </div>
        
       
          

</div>

         


</>
    )
} 
export default Cards