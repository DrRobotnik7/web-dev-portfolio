import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron'

function App() {

  return (
    <Router>
      <NavigationBar />
      <Jumbotron />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectgallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
    </Router>
  )
}

export default App
