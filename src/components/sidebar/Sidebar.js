import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { FaUser, FaRegSun } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { RiDashboardFill, RiPagesFill } from "react-icons/ri";
import logo from '../../components/assets/Sg.ico'

import { NavLink } from "react-router-dom";
import "./sidebar.css";

function SidebarMenu() {

  return (
    <div className="sidebar" style={{ display: 'flex', minHeight: '100vh', }}>

      <Sidebar
        backgroundColor="#222E3C"
        className="sidebar-container"
        width='200px'
      >
        <Menu>
          <p className="logo"> <img src={logo} alt='logo' height='50px' /> </p>

          <MenuItem icon={<RiDashboardFill />}>
            <NavLink to='./'><span style={{ color: '#fff' }}>Home</span> </NavLink>
          </MenuItem>

          <MenuItem icon={<RiDashboardFill />}>
            <NavLink to='./users'><span style={{ color: '#fff' }}>Users</span> </NavLink>
          </MenuItem>
 
          <SubMenu icon={<FaRegSun />} label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu icon={<BiLogOut />} label="Theme">
            <MenuItem> Dark </MenuItem>
            <MenuItem> Light </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>

    </div>
  );
}

export default SidebarMenu