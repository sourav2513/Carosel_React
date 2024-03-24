import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';

import { FaFire, FaPoo } from 'react-icons/fa';
import { useState } from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col md:w-20 sm:w-12 fixed top-0 left-0 lg:w-20 z-20 h-screen rounded-tr-2xl rounded-br-2xl bg-gray-800 text-gray-300 shadow-lg'>
      <SideBarIcon icon={<FaFire size="28" />} />

      <div className='flex flex-col mt-24'>
        <SideBarIcon icon={<BsPlus size="32" />} />
        {/* <SideBarIcon icon={<ImPlay size="32" />} /> */}
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
      </div>
      <div className='flex flex-col absolute bottom-0 sm:left-2 md:left-4 mt-64'>
        <Divider CN='' /> 

        <SideBarIcon CN='md:mt-7'  icon={<BsGearFill size="22" />} />
      </div>
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip',CN='' }) => (
  <div className={`sidebar-icon group ${CN}`}>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
);

const Divider = ({CN}) => <hr className={`sidebar-hr ${CN}`} />;
export default Sidebar
