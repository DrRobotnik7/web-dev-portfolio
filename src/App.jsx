import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <Router>
      <NavigationBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectgallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
    </Router>
  )
}

export default App
