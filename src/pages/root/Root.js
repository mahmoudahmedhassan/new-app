import { Outlet } from "react-router-dom";
import SidebarMenu from '../../components/sidebar/Sidebar';
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import './root.css';
import { useSelector } from 'react-redux';

const Root = () => {
   const { witchSidebar } = useSelector(state => state.switcherSidebarSlice);
   const { dirction } = useSelector(state => state.switchDrictionSlice);

  return (
    <div className={dirction === 'ar' ? 'rtlDir  wrapper' : 'wrapper'}>
      <div className='main'>

        <div style={{ zIndex: '99' }} className='scrollbar'>
          <SidebarMenu />
        </div>

        <div style={{width: '100%'}}
        className={dirction==="en"? witchSidebar? "main-container-close": 'main-container-open':witchSidebar? "main-container-ar-close": 'main-containe-ar-open'}
        // className={  witchSidebar ? "main-container-close" : 'main-container-open' }
        >
          <Header />
          <div className="main-outlet">
            <Outlet />
          </div>
          <Footer />
        </div>

      </div>

    </div>

  );
};

export default Root;