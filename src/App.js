import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from './components/pages/Home'
import FirstPage from './components/pages/FirstPage'
import SecondPage from './components/pages/SecondPage'


function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first-page' element={<FirstPage />} />
        <Route path='/second-page' element={<SecondPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
