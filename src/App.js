import React from 'react';
import './App.css';
import Sidebar from './pages/home/Sidebar';
import Homepage from './pages/dashboard/Homepage';
import Header from './pages/home/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Addwebsites from './pages/addWebsite/Addwebsites';
import Adddirector from './pages/addDirector/Adddirector';
import Tickets from './pages/tickets/Tickets';
import Reports from './pages/reports/Reports';
import Addtt from './pages/addTT/Addtt';
function App() {
  return (
        <BrowserRouter>
    <div className='d-flex'>
      <div className='w-auto'>
      <Sidebar></Sidebar>
      </div>
      <div className='col overflow-auto home-bg'>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/addwebsites' element={<Addwebsites/>}></Route>
          <Route path='/adddirectors' element={<Adddirector/>}></Route>
          <Route path='/addtt' element={<Addtt/>}></Route>
          <Route path='/tickets' element={<Tickets/>}></Route>
          <Route path='/reports' element={<Reports/>}></Route>
        </Routes>
      </div>
    </div>
        </BrowserRouter>
  );
}

export default App;
