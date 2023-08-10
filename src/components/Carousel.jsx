

const Carousel = () => {
  return (
    
<div id="carouselExampleInterval" className="carousel slide"data-bs-ride="carousel">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <h1 className="TitleC">Popular MyTineraries!</h1>
    <div className="carousel-item active"data-bs-interval="8000"  >
    <div className="card" >
     <div className="img">
     <img src="../images/New York.jpg" height="200"  className="d-block w-100 " alt="New York"></img> 
   <p className="p1">New York</p>
   <p className="p2">United States</p>
    </div>
    
    <div className="img">
    <img src="../images/Roma.jpg" height="200" className="d-block w-100" alt="New York"></img>
    <p className="p1">Rome</p>
    <p className="p2">Italy</p>
    </div> 
    <div className="img">
    <img src="../images/Paris.jpg" height="200" className="d-block w-100 " alt="New York"></img> 
    <p  className="p1">Paris</p> 
    <p className="p2">France</p>
      </div>
<div className="img">
      
      <img src="../images/Queenstown Nueva Zelanda.jpg" height="200" className="d-block w-100" alt="New York"></img>
      <p className="p1">Queenstown</p>
      <p className="p2">New Zealand</p>
      </div> 
    </div>
    </div>
    <div className="carousel-item"data-bs-interval="4000"  >
    <div className="card" >
     <div className="img">
     <img src="../images/Barcelona.jpg" height="200"  className="d-block w-100 " alt="New York"></img> 
   <p className="p1">Barcelona</p>
   <p className="p2">Spain</p>
    </div>
    
    <div className="img">
    <img src="../images/RioDeJaneiro.jpg" height="200" className="d-block w-100" alt="New York"></img>
    <p  className="p1">Rio de Janeiro</p>
    <p className="p2">Brazil</p>
    </div> 
    <div className="img">
    <img src="../images/Buenos aires.jpg" height="200" className="d-block w-100 " alt="Buenos Aires"></img> 
    <p className="p1" >Buenos Aires</p> 
    <p className="p2">Argentina</p>
      </div>
<div className="img">
      <img src="../images/Cartagena.jpg" height="200" className="d-block w-100" alt="cartagena"></img>
      <p className="p1">Cartagena</p>
      <p className="p2">Colombia</p>
    </div> 
    </div> 
    </div>
    <div className="carousel-item" >
    <div className="card" >
    <div className="img">

     <img src="../images/cuzco.jpg" height="200"  className="d-block w-100 " alt="New York"></img> 
   <p className="p1" >Cuzco</p>
   <p className="p2">Peru</p>
    </div>
    <div className="img">
    <img src="../images/Budapest.jpg" height="200" className="d-block w-100" alt="New York"></img>
    <p className="p1">Budapest</p>
    <p className="p2">Hungary</p>
    </div> 
    <div className="img">
    <img src="../images/estambul.jpg" height="200" className="d-block w-100 " alt="New York"></img> 
    <p className="p1">Istanbul</p> 
    <p className="p2">Turkey</p>
      </div>
     <div className="img">
      
      <img src="../images/tokio.jpg" height="200" className="d-block w-100" alt="New York"></img>
      <p className="p1">Tokyo</p>
      <p className="p2">Japan</p>
      </div> 
    </div>
  </div>
  <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" color="black" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carousel