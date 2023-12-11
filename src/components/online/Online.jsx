import React from 'react'
import "./online.css"
const Online = (props) => {
    const {user}=props;
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} className='rightbarProfileImg' alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>{user.username}</span>
          </li>
  )
}

export default Online