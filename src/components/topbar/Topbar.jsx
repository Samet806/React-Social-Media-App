import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
         <div className="topbarLeft">
            <span className='topbarLogo'>Facebook</span>
         </div>
         <div className="topbarCenter">
            <div className="searchbar">
                 <SearchIcon className='searchIcon'/>
                 <input className='searchInput' type="search" placeholder='Search for friends,post or video' />
            </div>
         </div>
         <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>HomePage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <PersonIcon className='icons'/>
                <span className='topbarIconBadge'>1</span>
                </div>

                <div className="topbarIconItem">
                <ChatIcon  className='icons'/>
                <span className='topbarIconBadge'>1</span>
                </div>

                <div className="topbarIconItem">
                <NotificationsIcon  className='icons'/>
                <span className='topbarIconBadge'>1</span>
                </div>
             
            </div>
            <img src="/assets/person/1.jpeg" className='topbarImg' alt="" />
         </div>
         </div>
  )
}

export default Topbar