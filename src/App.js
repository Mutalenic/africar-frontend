/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/home/landingPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Index from './components';
import ReservedContainer from './components/ReservationContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/landingpage' element={<LandingPage />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Index />} />
        <Route path='/reservedcontainer' element={<ReservedContainer />} />
      </Routes>
    </Router>
  );
}
export default App;
