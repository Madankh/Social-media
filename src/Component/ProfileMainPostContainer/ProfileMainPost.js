import React from 'react'
import "./profilemainPost.css";
import Coverimage from "../Images/Profile.png"
import ContentPost from "../ContentPostContainer/ContentPost"
import Post from '../PostContainer/Post';
export default function ProfileMainPost() {
  return (
    <div className='ProfilemainPostContainer'>
      <div>
        <img src={`${Coverimage}`} className="profileCoverimage" alt="" />
        <h2 style={{marginTop:-43 , color:"white" , textAlign:"start" , marginLeft:"34px"}}>Your Profile</h2>
      </div>
      <ContentPost/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
