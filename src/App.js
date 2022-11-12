import Home from './pages/home/Home.js';
import Root from './pages/root/Root.js';
import LoginUser from './pages/auth/login/LoginUser';
import NotFound from './pages/notFoundPage/NotFound';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import PrivateRoute from './pages/PrivateRoute.js';
import Users from './pages/users table/Users.js';
import User from './pages/user/User.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/loginUser" exact element={<LoginUser />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Root />}>
              <Route path="/" exact element={<Home />} />
              <Route path="/users" exact element={<Users />} />
              <Route path="/user" exact element={<User />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
