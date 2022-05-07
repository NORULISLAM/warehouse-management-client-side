import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Loing from './component/Login/Loing';
import LogOut from './component/LogOut/LogOut';
import Header from './component/Header/Header';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import AddItem from './component/AddItems/AddItem';
import MangeItem from './component/ManageItem/MangeItem';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import RequireAuth from './component/RequireAuth/RequireAuth';
import AddServiceDetails from './component/AddServiceDetails/AddServiceDetails';
import ManageInventory from './component/AddServiceDetails/ManageInventory/ManageInventory';
import MyItem from './component/MyItem/MyItem';
import UpdateUser from './component/UpdateUser/UpdateUser';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Loing></Loing>}></Route>
        <Route path='/logout' element={<LogOut></LogOut>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/additem/:serviceId' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>


        <Route path='/addservice' element={
          <RequireAuth>
            <AddServiceDetails></AddServiceDetails>
          </RequireAuth>
        }></Route>

        <Route path='/managesinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
        {/* <Route path='/manageitem' element={<MangeItem></MangeItem>}></Route> */}

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
