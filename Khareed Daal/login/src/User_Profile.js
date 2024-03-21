import './User_Profile.css';
import imguser from "./images/user_profile.png";
import React, { useState } from "react";

const UserProfile = () =>{
    const[user,setUser] =useState({
        name: 'Chirag Kaura',
        username: 'Chirag',
        email: 'chiragkaura.work@gmail.com',
        bio: 'Hey, I am trying to make this website in my learning process of React js.',
        profilePic: imguser,
    });

    const [isEditing,setISEditing] =useState(false);
    const handleEditClick = () => setISEditing(true);


    const [name,setName] =useState(user.name);
    const [username,setUserName] =useState(user.username);
    const [email,setEmail] =useState(user.email);
    const [bio,setBio] =useState(user.bio);
    const [profilePic,setProfilePic] =useState(user.profilePic);

    const handleSave =(e) => {
        e.preventDefault();
        setUser({...user,name,username,email,bio});
        setISEditing(false);
    };


return (
    
    <div className="user-profile">
        {isEditing ?(
            <form onSubmit={handleSave}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id ='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                    <label htmlFor='username'>User_Name</label>
                    <input type='text' id ='username' value={username} onChange={(e)=> setUserName(e.target.value)}/>
                    <label htmlFor='email'>Email_Id</label>
                    <input type='text' id ='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <label htmlFor='bio'>Bio</label>
                    <textarea type='text' id ='bio' value={bio} onChange={(e)=> setBio(e.target.value)}/>
                </div>
                <button type='submit'>Save</button>
                <button type='button' onClick={()=> setISEditing(false)}>cancel</button>
            </form>
            ):(
                <>
                <div className="profile-header">
            <img src ={user.profilePic} alt="Profile" className="profile-pic"/>
            <h2>{user.name}</h2>
            <p>@{username}</p>
        </div>
        <div className="profile-details">
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>Bio:</strong>{user.bio}</p>
        </div>
        <div className="profile-actions">
            <button onClick={handleEditClick}>Edit Profile</button>
        </div>
        </>
      )}
      
    </div>

    );
};



export default UserProfile;