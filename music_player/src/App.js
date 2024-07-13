import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import About from './About';

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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;