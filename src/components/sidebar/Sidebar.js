import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { FaUser, FaRegSun } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { RiDashboardFill, RiPagesFill } from "react-icons/ri";
import logo from '../../components/assets/Sg.ico'
import { useSelector } from 'react-redux'

import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useTranslation } from 'react-i18next';

function SidebarMenu() {
  const { rtl } = useProSidebar();
  const [t] = useTranslation();

  // let lng = localStorage.getItem("xx-l");
  const { dirction } = useSelector(state => state.switchDrictionSlice);
  const dir = dirction && rtl;
  return (
    <div className="sidebar" style={{ display: 'flex', minHeight: '100vh', }}>

      <Sidebar
        backgroundColor="#222E3C"
        className="sidebar-container"
        width='200px'
      >
        <Menu>
          <p className="logo"> <img src={logo} alt='logo' height='50px' /> </p>

          {/* <MenuItem icon={<RiDashboardFill />}>
            <NavLink to='./'><span style={{ color: '#fff' }}>Home</span> </NavLink>
          </MenuItem> */}

          <MenuItem icon={<RiDashboardFill />}>
            <NavLink to='./users'><span style={{ color: '#fff' }}>{t("Users")}</span> </NavLink>
          </MenuItem>
          <MenuItem icon={<RiDashboardFill />}>
            <NavLink to='./tables'><span style={{ color: '#fff' }}>{t("Tables")}</span> </NavLink>
          </MenuItem>
          <MenuItem icon={<RiDashboardFill />}>
            <NavLink to='./reports'><span style={{ color: '#fff' }}>{t("Reports")}</span> </NavLink>
          </MenuItem>
  
     
        </Menu>
      </Sidebar>

    </div>
  );
}

export default SidebarMenu