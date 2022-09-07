import React from 'react'
import "./profilerightbar.css"
import ads from "../Images/ads.jpg";
import image1 from "../Images/image3.jpg";
import image2 from "../Images/image2.jpg";
import image5 from "../Images/image5.jpg";
import image4 from "../Images/image4.jpg";
import image6 from "../Images/image6.jpg";
import image7 from "../Images/image1.jpg";

import addFriends from "../Images/add-user.png"
export default function ProfileRightbar() {
  return (
    <div className='Profilerightbar'>
      <div className='profilerightcontainer'>
        <h3>Friend request</h3>
        <div>
          <div>
             <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
              <img src={`${image1}`} className="Friendsimage" alt="" />
              <p style={{textAlign:"start"  , marginLeft:"10px"}}>Rin jonsion want to make you friends</p>
            </div>
            <div style={{display:"flex" , justifyContent:'space-around'}}>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"black", color:"white", borderRadius:"10px"}}>Deny</button>
            </div>
          </div>
          <div>
             <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
              <img src={`${image2}`} className="Friendsimage" alt="" />
              <p style={{textAlign:"start"  , marginLeft:"10px"}}>Rin jonsion want to make you friends</p>
            </div>
            <div style={{display:"flex" , justifyContent:'space-around'}}>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"black", color:"white", borderRadius:"10px"}}>Deny</button>
            </div>
          </div>
          <div>
             <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
              <img src={`${image5}`} className="Friendsimage" alt="" />
              <p style={{textAlign:"start"  , marginLeft:"10px"}}>Rin jonsion want to make you friends</p>
            </div>
            <div style={{display:"flex" , justifyContent:'space-around'}}>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"black", color:"white", borderRadius:"10px"}}>Deny</button>
            </div>
          </div>
          
        </div>

      </div>

      <div className='rightcontainer2'>
        <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image2}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Suman</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Suggested for you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image5}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Dan jok</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image4}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Jemes Op</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image6}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Kaji</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image7}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Madan bO</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image1}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Elon musk</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image1}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Dan jok</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        

      </div>


    </div>
  )
}
