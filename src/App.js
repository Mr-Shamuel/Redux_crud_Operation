import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ShowUser from './Components/ShowUser/ShowUser';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import EditUser from './Components/EditUser/EditUser';
function App() {

  return (
    <div className="App  ">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showuser' element={<ShowUser />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/edituser' element={<EditUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
