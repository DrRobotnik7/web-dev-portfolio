import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import ProjectGallery from './pages/ProjectGallery'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectgallery" element={<ProjectGallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

// 
{/* <Route path="contact" element={<Contact />} /> */}
// Try with / and without

export default App
