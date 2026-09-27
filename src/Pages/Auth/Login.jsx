import { useState } from "react";
import("./Auth.css");
import { NavLink, useNavigate } from "react-router";
import toast from 'react-hot-toast';

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate =useNavigate()

const handleChange=(e)=>{
   try {
    e.preventDefault()
    console.log(`Login ===>${name},${email},${password}`)
    toast.success('Successfully login')
    navigate("/")
    
    setEmail("")
    setPassword("")
   } catch (error) {
    console.log(`error ${error}`)
    toast.error(error)
  }
}
   return (
    <>
      <form className="form m-5 mx-auto">
        <p className="title">Login </p>
        <p className="message">Login now and get full access to our app. </p>
        
        <label>
          <input
            className="input"
            type="email"
            placeholder
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button className="submit" disabled={ !email || !password} onClick={handleChange}>
          Log in 
        </button>
        <p className="signin">
          Not a user? <NavLink to={"/register"}>Register here</NavLink>
        </p>
      </form>
    </>
  );
}

export default Login