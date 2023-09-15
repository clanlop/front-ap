import {Link }from'react-router-dom';

import { signout } from "../store/actions/userActions";
import { useSelector,useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch=useDispatch();
 
  const user = useSelector(store => store.userReducer.user);
  console.log(user)
  const defaultPhoto ='../images/user.png';

  

  
  const links =[
    {title:'Home',to:'/'},
    {title:'Cities',to:'/Cities'},
];

 
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
  <a  id="btnL" href="../Login" role="button"
       onClick={() => 

        
       
       
       dispatch(signout())}>
  
  
  <img className=" imagL"  src={user ? user.photo : defaultPhoto}  /></a>
  

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
        <a href="../Login" role="button"
        onClick={() => dispatch(signout())}>
          
        <img className=" imagLS"  src={user ? user.photo : defaultPhoto}  /></a>
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