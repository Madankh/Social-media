import React from 'react'
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png"
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='mainNavbar'>
          <div className='LogoContainer'>
                    <p>Social</p>
          </div>
          <div>
                    <div className='searchInputContainer'>
                              <img src={`${searchIcon}`} className="searchIcon" alt="" />
                              <input type="text" className='searchInput' placeholder='search your friends' name="" id="" />
                    </div>
          </div>
          <div className='IconsContainer'>
                    <img src={`${Notifications}`} className="Icons" alt="" />
                    <img src={`${Message}`} className="Icons" alt="" />
                    <Link to="/Profile/6123123b2b31n23">
                    <div style={{display:'flex' , alignItems:'center'}}>
                              <img src={`${Profileimage}`} className="ProfileImage" alt="" />
                              <p style={{marginLeft:'5px'}}>Suman</p>
                    </div>
                    </Link>
          </div>
    </div>
  )
}
