import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaHome} from "react-icons/fa" 

const NoPage = () => {
    const navigate = useNavigate()
  return (
    <div className='no-page'>
        <h1>Oops!</h1>
        <h2>404 - PAGE NOT FOUND...!</h2>
         <button onClick={()=>navigate("/")}><span><FaHome /></span>Go To Home</button>
    </div>
  )
}

export default NoPage