import React from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from '../post/Post'
import {Posts} from "../../dummyData"
import {Users} from "../../dummyData"

const Feed = () => {

  // const user=Users.filter(u=>u.id===1)
  // console.log(user[0].username)
  return (
    <div className='feed'>
      <div className="feedWrapper">
         <Share/>
     
         {Posts.map(p=>{
            const user=Users.find(u=>u.id===p.userId)
            return  <Post key={p.id}  post={p} user={user}/>
         }
       
         )}
        
      </div>
    </div>
  )
}

export default Feed

