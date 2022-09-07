import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import ProfileLeftbar from '../../Component/ProfileLeftsidecontainer/ProfileLeftbar'
import ProfileMainPost from '../../Component/ProfileMainPostContainer/ProfileMainPost'
import ProfileRightbar from '../../Component/ProfileRightsideContainer/ProfileRightbar'
import "./profile.css"
export default function Profile() {
  return (
    <div className='ProfileContainer'>
          <Navbar/>
          <div className='subProfileContainer'>
                    <ProfileLeftbar/>
                    <ProfileMainPost/>
                    <ProfileRightbar/>
          </div>
    </div>
  )
}
