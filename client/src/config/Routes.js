import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default Router;