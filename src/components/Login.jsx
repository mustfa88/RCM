import React from "react";
import '../App.css'
import { LuArrowRightToLine } from "react-icons/lu";
import { Link } from "react-router-dom";
const Login = () => {
    return(
        <div className="signin">
          <h2 className="title text-center fw-bold">CO-MANGE</h2>
          <p className="fw-bold text-center para">Welcome to our community</p>
          <form>
  <div class="mb-3 position-relative">
    <label for="exampleInputEmail1" class="form-label fw-bold">email</label>
    <input type="email" class="form-control px-5 input-s" id="exampleInputEmail1" placeholder="enter your email or phone" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3 position-relative">
    <label for="exampleInputPassword1" class="form-label fw-bold">password</label>
    <input type="password" class="form-control px-5 input-s" placeholder="enter your password" id="exampleInputPassword1"/>
  </div>
  

  
  <Link type="submit" to='/desktop-2' class="btn btn-primary w-100 submit">Sign in  <LuArrowRightToLine/></Link>
</form>

        </div>
    )
}
export default Login