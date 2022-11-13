import { configureStore } from '@reduxjs/toolkit'
import login from './auth/loginSlice';
import switcherSidebarSlice from './switchSidebar'
import tapleDataSlice from './tableUsersData';
import userDataSlice from './userData';
import switchDrictionSlice from './toggledirction'
export  const store = configureStore({
  reducer: {
    login ,
    switcherSidebarSlice,
    tapleDataSlice,
    userDataSlice,
    switchDrictionSlice
  },
})