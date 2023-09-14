import React, { useEffect } from 'react'
import { AppSate } from '../Context/AppProvaider'
import { useNavigate, useParams } from 'react-router-dom'
import {BiMinusBack} from "react-icons/bi"

const UserProfile = () => {
  const {user} = AppSate() 
  const navigate = useNavigate()
  const {id} = useParams()
   
  const user_profile = user.find((per)=>per.id === id)

  return (
    <div className='user-profile'>
      <h1>User Profile</h1>
       <div className="user-profile-card">
          <h1>{user_profile.name}</h1>
          <h4>Age : {user_profile.age}</h4>
          <h4>Roll : {user_profile.role}</h4>
          <h4>Experience : {user_profile.experience }</h4>
          <h4>Email : {user_profile.email}</h4>
          <h4>Mobile Number : {user_profile.mobile}</h4>
          <h4>Address : {user_profile.address}</h4>
          <button className="back" onClick={()=>navigate("/")}><span><BiMinusBack /></span>Back</button>
       </div>
    </div>
  )
}

export default UserProfile
