import { configureStore } from '@reduxjs/toolkit'
import login from './auth/loginSlice';
import switcherSidebarSlice from './switchSidebar'
import tapleDataSlice from './tableUsersData'
export  const store = configureStore({
  reducer: {
    login ,
    switcherSidebarSlice,
    tapleDataSlice
  },
})