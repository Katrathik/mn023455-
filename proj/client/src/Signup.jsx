import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './App.css'

const Signup = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => console.log(result) ,
            navigate('/login'))
        .catch(err=> console.log(err))
    }

  return (
    <div className='container d-flex  justify-center items-center'>
        <div className=' bg-white p-3 rounded w-24'></div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input className=' rounded-0' type="text" placeholder='Enter name' name="name" id="name" onChange={(e)=> setName(e.target.value)} />
            </div>
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

export default Signup