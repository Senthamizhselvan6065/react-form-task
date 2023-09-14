import React from "react";
import { AppSate } from "../Context/AppProvaider";
import {HiViewGrid} from "react-icons/hi"
import {AiTwotoneEdit} from "react-icons/ai"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {FaUserEdit} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { user, setUser } = AppSate();
  const navigate = useNavigate()
  const deleteUser = async(id)=>{
      try {
         const responce = await fetch(`https://6422c86677e7062b3e22836f.mockapi.io/users/${id}`, {
             method: "Delete"
         })
         const data = await responce.json()
         const deleteList = user.filter((per, idx)=>per.id !== id) 
         setUser(deleteList)
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="user-details">
      <header>
        <h3 onClick={()=>navigate('/create/user')}> <span><FaUserEdit /></span> Create a User</h3>
        <h1>User Details</h1>
      </header>
      <div className="user-details-content">
        {user
          ? user.map((person, idx) => (
              <div key={idx} className="user-details-card">
                <h2>{person.name ? person.name : "Name"}</h2>
                <h4>Age : {person.age}</h4>
                <h4>Role : {person.role}</h4>
                <div className="user-details-btn">
                  <button className="user-details-button" onClick={()=>navigate(`/profile/${person.id}`)}> <span><HiViewGrid /></span> View</button>
                  <button className="user-details-button" onClick={()=>navigate(`/edit/user/${person.id}`)}><span><AiTwotoneEdit /></span> Edit</button>
                  <button className="user-details-button" onClick={()=>deleteUser(person.id)}> <span><RiDeleteBin5Fill /></span> Delete</button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default UserDetails;
