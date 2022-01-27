import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SettingsIcon from "@mui/icons-material/Settings";
import PriceIndicator from '../SubComponents/PriceIndicator'
import PortfolioShow from "../SubComponents/PortfolioShow";
import FormComponents from "../SubComponents/FormComponents";

function MainScreen() {
  const [sidebar, SetSidebar] = useState(true);
  const arr = [<Page1 /> , <Page2 />]
  const [screen ,SetScreen] = useState (0)



  function Page1(){
    return(<div className=" px-8 pt-4">
    <div className=" flex justify-between items-center">
      <p className=" capitalize text-4xl font-semibold">
        Crypto dashboard
      </p>
      <p className=" capitalize text-sm">home / dashboard / crypto</p>
    </div>
    <PriceIndicator />
    <PortfolioShow />
    
  </div>)
  }

  function Page2(){
    return (<div className=" px-8 pt-4 ">
    <div className=" flex justify-between items-center">
      <p className=" capitalize text-4xl font-semibold">
        Contact Form
      </p>
      <p className=" capitalize text-sm">home / form / contact form</p>
    </div>
    <FormComponents />
    
  </div>)
  }
  return (
    <div className="ms relative overflow-hidden w-screen">
      <Navbar SideSet={SetSidebar} />
      <Sidebar screen={SetScreen} setSide={SetSidebar} side={sidebar} />
      <div className=" w-24  fixed hover:bg-gradient-to-l  bg-gradient-to-r cursor-pointer items-center from-indigo-600 to-pink-600 text-white right-0 top-52 z-50 text-5xl text-center rounded-l-full pb-3 -mr-1 pt-2 ">
        <SettingsIcon
          className="animate-spin duration-500 "
          fontSize="inherit"
        />
      </div>
      <div className="pt-24 pl-24 relative h-screen  text-white">
        {arr[screen]}
      </div>   
    </div>
  );
}

export default MainScreen;
