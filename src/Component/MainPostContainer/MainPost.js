import React from 'react'
import "./mainPost.css";
import ContentPost from "../ContentPostContainer/ContentPost"
import Post from '../PostContainer/Post';
export default function MainPost() {
  return (
    <div className='mainPostContainer'>
      <ContentPost/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
