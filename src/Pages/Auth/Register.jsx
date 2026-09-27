import { useState } from "react";
import("./Auth.css");
import { NavLink, useNavigate } from "react-router";
import toast from 'react-hot-toast';
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate =useNavigate()

const handleChange=(e)=>{
   try {
    e.preventDefault()
    console.log(`register ===>${name},${email},${password}`)
    toast.success('Successfully Register')
    navigate("/login")
    setName("")
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
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              placeholder
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Firstname</span>
          </label>
        </div>
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

        <button className="submit" disabled={!name || !email || !password} onClick={handleChange}>
          Register here
        </button>
        <p className="signin">
          Already have an acount ? <NavLink to={"/login"}>Login</NavLink>
        </p>
      </form>
    </>
  );
};

export default Register;
