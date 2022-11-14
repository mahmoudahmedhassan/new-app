import { configureStore } from '@reduxjs/toolkit'
import login from './auth/loginSlice';
import switcherSidebarSlice from './switchSidebar'
import tapleDataSlice from './tableUsersData';
import userDataSlice from './userData';
import switchDrictionSlice from './toggledirction';
import userRegisterSlice from './auth/registerSlice'
export  const store = configureStore({
  reducer: {
    login ,
    userRegisterSlice,
    switcherSidebarSlice,
    tapleDataSlice,
    userDataSlice,
    switchDrictionSlice
  },
})