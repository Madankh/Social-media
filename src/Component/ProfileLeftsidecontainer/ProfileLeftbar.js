import React from 'react'
import "./profileleftbar.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg"
export default function ProfileLeftbar() {
          return (
                    <div className='ProfileLeftbar'>
                              <div className='NotificationsContainer'>
                                        <img src={`${image}`} className="ProfilepageCover" alt="" />
                                         <div style={{display:'flex' , alignItems:'center' , marginTop:-30}}>
                                                  <img src={`${image2}`} className="Profilepageimage" alt="" />
                                                  <div>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:'start'}}>Suman</p>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:"start" , marginTop:-16 , fontSize:11}}>Software Developer</p>
                                                  </div>
                                         </div>
                                         <div style={{display:'flex' , justifyContent:'space-between'}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Profile Views</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>43924</p>
                                         </div>

                                         <div style={{display:'flex' , justifyContent:'space-between' , marginTop:-20}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Friends</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>4324</p>
                                         </div>
                                         <div style={{marginTop:-20}}>
                                                  <h5 style={{color:"black", marginLeft:10 , fontSize:"14px" , marginRight:30, marginTop:30 , textAlign:"start"}}>User bio</h5>
                                                  <p style={{color:"black"  , fontSize:"12px" , marginTop:-20 , textAlign:"start" , marginLeft:"10px"}}>I would rather be despised of who I am, rather than loved by who I am not.</p>
                                         </div>
                                         <button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>Edit Bio</button>
                                        
                              </div>

                              <div className='NotificationsContainer'>
                                <h3>Your frineds</h3>
                                <div style={{display:"flex" , justifyContent:'space-between'}}>
                                        <p style={{marginLeft:10}}>Friends</p>
                                        <p style={{marginRight:10 , color:"#aaa"}}>See all</p>
                                </div>
                                <div style={{display:'flex' , flexWrap:"wrap" , marginLeft:5}}>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image2}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Dan gAN</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image1}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Samn</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image5}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Uman</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image3}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Dan gAN</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image6}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Samn</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Uman</p>
                                        </div>
                                        
                                        
                                </div>
                              </div>

                    </div>
          )
}
