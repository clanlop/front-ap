import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { user_login} from "../store/actions/userActions";

import { GoogleSignin } from "./GoogleSignin";

const SignIn=()=>{
  const store = useSelector(store => store.userReducer);
  console.log(store)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
})

const dispatch = useDispatch();

const handleInput = (event) => {
  setFormData({
      ...formData,
      [event.target.name]: event.target.value
  })
}
console.log(formData)
const handleSignIn = async (event) => {
  event.preventDefault();

  try {
      dispatch(user_login({
          data: formData
      }))
  } catch (error) {
      console.log(error)
  }
}


    return(



            <div className="form-container">
              <div className=" cardLogin ">
              <p className="textS">Don't have an account?</p>
              <div className="SignCall">
              <a id="btnC" href="../Register" className="btn">SignUp!</a>  
              </div>
              <div>
              <GoogleSignin/>
              </div>
              </div>
               
            
              <div className="cardLogin  "> 
                <div id="cardLogin"  className="card">
                  <div id="bodyLogin"  className="card-body text-center">
        
                    <div className="mb-md-5 mt-md-4 pb-3">
        
                      <h2 className="fw-bold mb-2 text-uppercase">User</h2>
                      <p className="text-white-50 mb-5">Please enter username and password</p>
<form onSubmit={handleSignIn} >
       
        <div className="form-outline form-white mb-2">
            <label   htmlFor="email" className="form-label">
            Email</label>
            <input
               onChange={handleInput}
                type="email"
                name="email"
                id="nombreUsuario"
                className="form-control form-control-lg"
                placeholder="Enter email"
            />
          
          <div className="form-outline form-white mb-3">
        
            <label  className="form-label mt-3">
            Password</label>
            
              <input
                onChange={handleInput}
                type="password"
                id="password"
                name ="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
            
                />
            <button type="submit" className="btn btn-outline-light btn-lg px-5 mt-5"  onClick={handleSignIn}>
          Login
          </button>
        
     
    </div>
  </div>



</form>

</div>
</div>
</div>
              </div>
</div>
    )
}
export default SignIn