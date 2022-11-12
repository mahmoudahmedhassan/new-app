import { Outlet } from "react-router-dom";
import SidebarMenu from '../../components/sidebar/Sidebar';
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import './root.css';
import { useSelector } from 'react-redux';

const Root = () => {
  // const togglee = false
  const { witchSidebar } = useSelector(state => state.switcherSidebarSlice);

  return (
    <div>
      <div className='main'>

        <div style={{ zIndex: '99' }} className='scrollbar'>
          <SidebarMenu />
        </div>

        <div style={{width: '100%'}}
        className={  witchSidebar ? "main-container-close" : 'main-container-open' }
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