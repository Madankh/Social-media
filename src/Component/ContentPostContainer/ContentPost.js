import React from 'react'
import "./contentpost.css";
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import VideoIcon from "../Images/video.png"
import profileimage from "../Images/Profile.png"
export default function ContentPost() {
  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${profileimage}`} className="profileimage" alt="" />
          <input type="text" className='contentWritingpart' placeholder='Write your real thought.....' />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px' }}>
          <div>
            <img src={`${imageIcon}`} className="icons" alt="" />
            <img src={`${emojiIcon}`} className="icons" alt="" />
            <img src={`${VideoIcon}`} className="icons" alt="" />
            <button style={{marginLeft:"350px" , paddingLeft:"20px" , paddingRight:"20px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer"}}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}
