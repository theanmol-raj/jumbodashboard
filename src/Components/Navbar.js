import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar({SideSet}) {
  return <div className=' w-screen pl-4 sm:pl-6 lg:pl-8 xl:pl-24 fixed h-20  top-0 z-20 flex flex-row justify-between navbarbackground shadow-xl'>
        <div className='flex items-center space-x-5 text-2xl text-white'>
            <button onClick={()=>{SideSet(true)}}><MenuIcon fontSize='inherit' /></button>
            <img alt='' className=' w-36' src='https://jumbo.g-axon.work/images/logo-white.png'  />
        </div>
        <div className=' flex'>
            <div className=' lg:flex hidden '>
                <div className=' relative w-80 my-4'>
                    <input placeholder='Search here ...' className=' placeholder:pl-12 placeholder:text-indigo-50 h-full rounded-3xl w-full bg-indigo-300' />
                    <span className=' absolute left-5 text-2xl top-2 text-white'><SearchIcon fontSize='inherit' /></span>
                </div>
            </div>
            <div className=' hidden sm:flex items-center text-2xl text-white space-x-5 px-5 border-r border-gray-400'>
                <GridViewIcon fontSize='inherit' />
                <ChatIcon fontSize='inherit' />
                <NotificationsIcon fontSize='inherit' />
            </div>
            <div className=' items-center flex px-5'>
                <img src='https://jumbo.g-axon.work/images/flag/icons8-usa.png' alt='' />
            </div>
        </div>
  </div>;
}

export default Navbar;
