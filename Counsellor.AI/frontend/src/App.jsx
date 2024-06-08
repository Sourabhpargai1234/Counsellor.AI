import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aipage from './pages/Aipage';
import Feedbackpage from './pages/Feedbackpage';
import Profilepage from './pages/Profilepage';
import Contactpage from './pages/Contactpage';
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/ai' element={<Aipage/>} />
      <Route path='/feedback' element={<Feedbackpage />} />
      <Route path='/profile' element={<Profilepage />} />
      <Route path='/contact' element={<Contactpage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/login' element={<Loginpage />} />
    </Routes>
  );
};

export default App;