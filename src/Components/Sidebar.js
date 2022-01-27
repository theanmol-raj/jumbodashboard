import React from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PeopleIcon from '@mui/icons-material/People';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EditIcon from '@mui/icons-material/Edit';
import ColorizeIcon from '@mui/icons-material/Colorize';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LockIcon from '@mui/icons-material/Lock';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ErrorIcon from '@mui/icons-material/Error';

function Sidebar({side,setSide,screen}) {
    const Dashboard = [{icon:<MonetizationOnIcon fontSize='inherit' /> ,name :'Crypto' },{icon:<CorporateFareIcon fontSize='inherit' /> ,name :'Listing' },{icon:<PeopleIcon fontSize='inherit' /> ,name :'CRM' },{icon:<PieChartIcon fontSize='inherit' /> ,name :'Intranet' },{icon:<ShoppingCartIcon fontSize='inherit' /> ,name :'eCommerce' },{icon:<MenuBookIcon fontSize='inherit' /> ,name :'News' },{icon:<LibraryBooksIcon fontSize='inherit' /> ,name :'Misc' }]

    const Components = [{icon:<WidgetsIcon fontSize='inherit' /> ,name :'MUI Component' },{icon:<WidgetsIcon fontSize='inherit' /> ,name :'Coremat Components' },{icon:<ViewCompactIcon fontSize='inherit' /> ,name :'Widgets' },{icon:<TimelineIcon fontSize='inherit' /> ,name :'Metrices' }]

    const Apps = [{icon:<EmailIcon fontSize='inherit' /> ,name :'Mail' },{icon:<CheckCircleIcon fontSize='inherit' /> ,name :'To-Do' },{icon:<ContactMailIcon fontSize='inherit' /> ,name :'Contact' },{icon:<ChatIcon fontSize='inherit' /> ,name :'Chat' },{icon:<ChatIcon fontSize='inherit' /> ,name :'Kanban Board' },]
    
    const SocialApps = [{icon:<AccountCircleIcon fontSize='inherit' /> ,name :'Profile' },{icon:<AssignmentIndIcon fontSize='inherit' /> ,name :'Wall-App' }]

    const View = [{icon:<TimelineIcon fontSize='inherit' /> ,name :'Custom Timeline' },{icon:<TimelineIcon fontSize='inherit' /> ,name :'Material Timeline' }]

    const Extension = [{icon:<EditIcon fontSize='inherit' /> ,name :'Editor' },{icon:<ColorizeIcon fontSize='inherit' /> ,name :'Picker' },{icon:<DragIndicatorIcon fontSize='inherit' /> ,name :'Drag and Drop' },{icon:<CloudUploadIcon fontSize='inherit' /> ,name :'Dropzone' },{icon:<NotificationImportantIcon fontSize='inherit' /> ,name :'Sweet Alert' },{icon:<NotificationsIcon fontSize='inherit' /> ,name :'Notification' }]

    const Module = [{icon:<PeopleIcon fontSize='inherit' /> ,name :'Users' },{icon:<CalendarTodayIcon fontSize='inherit' /> ,name :'Calendar' }]

    const Visualization = [{icon:<BarChartIcon fontSize='inherit' /> ,name :'Chart' },{icon:<AddLocationAltIcon fontSize='inherit' /> ,name :'Google Maps' }]

    const ExtraPages = [{icon:<LockIcon fontSize='inherit' /> ,name :'Login' },{icon:<EditIcon fontSize='inherit' /> ,name :'Sign up' },{icon:<ToggleOffIcon fontSize='inherit' /> ,name :'Forgot Password' },{icon:<ErrorIcon fontSize='inherit' /> ,name :'Error' }]

  return <div onMouseEnter={()=>{setSide(true)}} onMouseLeave={()=>{setSide(false)}} className={`sidebarbackground group overflow-hidden sm:flex flex-col hidden lg:flex ${side ? 'w-80' : 'w-[72px]'} transform transition-width duration-300 ease-in-out fixed left-0 h-screen z-50`}>
    <img alt='' src='https://jumbo.g-axon.work/images/avatar/avatar13.jpg' className=' h-12 mb-4 group-hover:mb-0 w-12 rounded-full mt-8 ml-3  ' />
    <div className={` ${side ? 'block' : 'hidden'}  transition-display ml-2 transform duration-500 ease-in `}>
    <p className='pt-6 -mb-1 font-bold text-white'>Robert Jhonson</p>
    <p className='font-semibold pb-4 text-gray-500'>robert.jhonson@gmail.com</p>
    
    </div>
    <hr className=' border-b mx-1 bordercol' />
    <div className=' overflow-y-scroll scrollbar-hide'>
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>dashboard</p>
        {Dashboard.map((item , index) => <button key={index} onClick={index ? () =>{screen(1)} : () => {screen(0)}} className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>
    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>Components</p>
        {Components.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>

    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>Apps</p>
        {Apps.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>

    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>Social Apps</p>
        {SocialApps.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl  group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>

    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>View</p>
        {View.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl  group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>

    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>Extension</p>
        {Extension.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl  group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>

    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>Module</p>
        {Module.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>

    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>Visualization</p>
        {Visualization.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>

    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-1 py-4  items-center'>
    <p className=' font-bold text-xs uppercase text-left textcol w-full pl-4 pb-2 tracking-wide hidden group-hover:block '>Extra Pages</p>
        {ExtraPages.map(item => <button className='py-1 hover:bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white  group-hover:mr-12 group-hover:rounded-r-full items-center w-full whitespace-nowrap text-left  textcol text-md'><span className=' text-2xl group-hover:bg-transparent ml-6 group-hover:ml-12 rounded-3xl px-1 -pt-1'>{item.icon}</span><span className=' pl-4'>{item.name}</span></button>)}
    </div>
    <hr className=' border-b mx-1 bordercol mt-2' />
    <div className=' flex flex-col space-y-4 py-4 mx-4  items-center'>
    <p className='h-0 opacity-0'><span className=' text-2xl -mt-1  group-hover:bg-transparent ml-1 group-hover:ml-12 px-1 -pt-1 text-blue-600'><PeopleIcon fonSize='inherit' /></span><span className='ml-1 font-semibold text-blue-600 pl-4'>Github Access</span></p>
        <button className='py-1 m-3 bg-green-100 text-green-600 group-hover:rounded-md rounded-full my-4 items-center w-full whitespace-nowrap text-left text-md'><span className=' text-2xl -mt-1  group-hover:bg-transparent ml-1 group-hover:ml-12 px-1 -pt-1 text-green-600'><PeopleIcon fonSize='inherit' /></span><span className='ml-1 font-semibold text-blue-600 pl-4'>Documentations</span></button>
        <button className='py-1 m-3 bg-indigo-100 text-indigo-600 group-hover:rounded-md rounded-full my-4 items-center w-full whitespace-nowrap text-left text-md'><span className=' text-2xl -mt-1  group-hover:bg-transparent ml-1 group-hover:ml-12 px-1 -pt-1 text-indigo-600'><PeopleIcon fonSize='inherit' /></span><span className='ml-1 font-semibold text-blue-600 pl-4'>Changelog</span></button>
        <button className='py-1 m-3 bg-purple-100 text-purple-600 group-hover:rounded-md rounded-full my-4 items-center w-full whitespace-nowrap text-left text-md'><span className=' text-2xl -mt-1  group-hover:bg-transparent ml-1 group-hover:ml-12 px-1 -pt-1 text-purple-600'><PeopleIcon fonSize='inherit' /></span><span className='ml-1 font-semibold text-purple-600 pl-4'>Raise a ticket</span></button>
        <button className='py-1 m-3 bg-red-100 text-red-600 group-hover:rounded-md rounded-full my-4 items-center w-full whitespace-nowrap text-left text-md'><span className=' text-2xl -mt-1  group-hover:bg-transparent ml-1 group-hover:ml-12 px-1 -pt-1 text-red-600'><PeopleIcon fonSize='inherit' /></span><span className='ml-1 font-semibold text-blue-600 pl-4'>Join a ticket</span></button>
        <button className='py-1 m-3 bg-blue-100 text-blue-600 group-hover:rounded-md rounded-full my-4 items-center w-full whitespace-nowrap text-left text-md'><span className=' text-2xl -mt-1  group-hover:bg-transparent ml-1 group-hover:ml-12 px-1 -pt-1 text-blue-600'><PeopleIcon fonSize='inherit' /></span><span className='ml-1 font-semibold text-blue-600 pl-4'>Github Access</span></button>
    </div>
    </div>
  </div>;
}

export default Sidebar;
