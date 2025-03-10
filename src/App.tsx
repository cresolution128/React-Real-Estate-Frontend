import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Scroll from 'components/_ui/Scroll';

import Home from './pages/Home';
import About from './pages/About';
import Service from 'pages/Service';
import Team from 'pages/Team';
import Project from 'pages/Project';
import Contact from 'pages/Contact';
import Blog from 'pages/Blog';
import Single from 'pages/Single';

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/team' element={<Team />} />
        <Route path='/project' element={<Project />} />
        <Route path='/pages' element={<Project />} />
        <Route path='/pages/blog' element={<Blog />} />
        <Route path='/pages/single' element={<Single />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Navigate replace to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
