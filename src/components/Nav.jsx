import {Link }from'react-router-dom'

const Nav = () => {const links =[
    {title:'Home',to:'/'},
    {title:'Cities',to:'/Cities'},
]
return (

<>

<div className='navL'>
  <nav className="navbar">
  <div className="container-fluid">
  <div>
   <img src="./images/MyTineraryLogo.png" alt="" width="100" height="100" ></img>
   </div>
  <div>
  <a id='btnD' className="btn btn-light " href="/" role="button">Home</a>
  <a id='btnD' className="btn btn-light"  href="../Cities" role="button">Cities</a>
  <a id='btnD' className=" btn "   href="/" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
  </svg> Login</a>
</div>
</div>

</nav>
</div>
<div className='navS'>
  <nav className="navbar">
    <div className="container-fluid">
    <img src="./images/MyTineraryLogo.png" alt="" width="100" height="100" ></img>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {
        links.map((link) =>(<Link key={link}  to={link.to}>{link.title}</Link>))
        }
        <li className="nav-item">
        </li>
        <li className="nav-item">
        <a id='btnD' className=" btn"   href="/" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg> Login</a>
        </li>
        
      </ul>
    </div>
    
</div>
 
</nav>
</div>

</>

  )
}

export default Nav