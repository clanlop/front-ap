import { useEffect, useState,useRef } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/userActions";
import { GoogleSignin } from "./GoogleSignin";
const SignUp =()=>{
  const [countries,setCountries]=useState([])
  const dispatch = useDispatch();

  const name = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const photo = useRef(null);
  const country = useRef(null);

  useEffect(()=>{
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
    setCountries(data.map((country) => country.name.common))
  );
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [name,lastName, email,password,photo, country];
    if (aux.some((campo) => !campo.current.value)) {
      alert("All fields are required");
    } else {
      const body = {
        name: name.current.value,
        lastName:lastName.current.value,
        email: email.current.value,
        photo: photo.current.value,
        password: password.current.value,
        country: country.current.value,
      };
      dispatch(signUp(body));
    }
  };

    return(

    <div className="form-container">
          <div className=" cardLogin ">
              <p className="textS">Already have an account?</p>
              <div className="SignCall">
              <a id="btnC" href="../Login" className="btn">SignIn!</a>  
              </div>
              <div>
              <GoogleSignin/>
              </div>
              </div>
           <div className="cardLogin  "> 
                <div id="cardReg"  className="card">
                <div className="card-body text-center">
                <div className="mb-md-5 mt-md-4 pb-3">
                 <h2 className="fw-bold mb-5 text-uppercase">Sign Up!</h2>
            
<form className="formSUp"  onSubmit={handleSubmit} >
    
  <div className="row-md-4 mb-md-2 mt-md-2 pb-3">
    <label  className="form-label">First name</label>
    <input type="text" name="name" ref={name} className="form-control"/>
    
  </div>
  <div className="row-md-4 mb-md-2 mt-md-2 pb-3">
    <label className="form-label " >Last name</label>
    <input type="text" name="lastName" ref={lastName} className="form-control"/>
   
  </div>
  <div className="row-md-4mb-md-2 mt-md-2 pb-3 ">
    <label  className="form-label">Email</label>
    <div className="input-group has-validation">
      <span className="input-group-text" >@</span>
      <input type="email"  name="email" ref={email} className="form-control"  aria-describedby="inputGroupPrepend"/>
      
    </div>
  </div>
  <div className="row-md-4mb-md-2 mt-md-2 pb-3 ">
    <label className="form-label" >Password</label>
    <input type="password" name="password" ref={password} className="form-control"/>
    
  </div>
  <div className="row-md-4mb-md-2 mt-md-2 pb-3 ">
    <label className="form-File" > User image</label>
    <input type="file" name="photo" ref={photo} className="form-control"/>
    
  </div>
  
  <div className="row-md-3 mb-md-2 mt-md-2 pb-3">
    <label  className="form-label">Country</label>
    <select   className="form-select" name="country" ref={country} >
    {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
                  {" "}
                  {country}{" "}
                </option>
              ))}
    </select>
    
  </div>
 
  
  <div className="row-12  mb-md-2 mt-md-2 pb-3">
    <button className="btn btn-outline-light btn-lg px-5 mt-5" type="submit">Sing Up</button>
  </div>
</form>
</div>
</div>
</div>
          </div>
</div>

    )
}
export default SignUp