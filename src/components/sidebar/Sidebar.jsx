import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import ChatIcon from '@mui/icons-material/Chat';
import {Users} from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sideWrapper">
            <ul className="sdebarList">
                <li className="sidebarListItem">
                  <RssFeedIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Feed</span>
                </li>
                <li className="sidebarListItem">
                  <ChatIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Chats</span>
                </li>

                <li className="sidebarListItem">
                  <MusicVideoIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Videos</span>
                </li>

                <li className="sidebarListItem">
                  <GroupsIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Groups</span>
                </li>


                <li className="sidebarListItem">
                  <BookmarksIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Bookmarks</span>
                </li>

                <li className="sidebarListItem">
                  <HelpOutlineIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Questions</span>
                </li>

                <li className="sidebarListItem">
                  <EventIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Events</span>
                </li>

                <li className="sidebarListItem">
                  <SchoolIcon className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Courses</span>
                </li>

                
            </ul>
            <button className='sidebarButton'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFriendList'>
                
               {Users.map(user=>(
                <CloseFriend key={user.id} user={user}/>
               ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Sidebar