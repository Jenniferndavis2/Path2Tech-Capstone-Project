import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import About from './About';
import Login from './pages/Login';
import Search from './pages/Search';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <Nav />
      </div>
      <div className='content'>
        <div className='content_box'>
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Signup" element={<Signup />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;