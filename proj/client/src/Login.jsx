import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './App.css'

const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
          console.log(result) 
          if(result.data === "Success"){
            navigate('/home')
          }
        })
        .catch(err=> console.log(err))
      }

  return (
    <div className='conatiner d-flex  justify-center items-center'>
        <div className=' bg-white p-3 rounded w-24'></div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input className=' rounded-0' type="email" placeholder='Enter email' name="email" id="email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input className=' rounded-0' type="password" placeholder='Enter password' name="password" id="password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <button type="submit" className=' w-56 rounded-0'>
                Register
            </button>
            <p>Aldready have an account</p>
            <Link to="/login" className="border w-56 bg-light rounded-0">
                Login
            </Link>
        </form>
    </div>
  )
}

export default Login